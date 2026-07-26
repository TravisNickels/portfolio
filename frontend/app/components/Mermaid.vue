<script setup lang="ts">
import { ref, watch, onBeforeUnmount, nextTick } from 'vue'
import mermaid from 'mermaid'

const props = defineProps<{ source: string; title: string }>()

// DOM refs
const inlineSvgHost = ref<HTMLElement | null>(null)
const modalSvgHost = ref<HTMLElement | null>(null)

// State
const svgSource = ref<string>('')
const isModalOpen = ref<boolean>(false)

// SvgPanZoom
let svgPanZoom: typeof import('svg-pan-zoom') | null = null
let inlinePanZoom: SvgPanZoom.Instance | null = null
let modalPanZoom: SvgPanZoom.Instance | null = null

mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'loose',
  theme: 'default',
})

// -------------- SVG Generation -------------

async function generateSvg() {
  if (!import.meta.client || !props.source) return

  const { svg } = await mermaid.render(`diagram-${crypto.randomUUID()}`, props.source)

  svgSource.value = svg
}

// -------------- PanZoom Mounting -------------

async function mountSvg(host: HTMLElement | null, previous?: SvgPanZoom.Instance | null): Promise<SvgPanZoom.Instance | null> {
  if (!host || !svgSource.value) return null

  // Lazy-load svg-pan-zoom ONLY in browser
  if (!svgPanZoom) {
    svgPanZoom = (await import('svg-pan-zoom')).default
  }

  previous?.destroy()
  host.innerHTML = svgSource.value

  const svgEl = host.querySelector('svg')
  if (!svgEl) return null

  svgEl.style.width = '100%'
  svgEl.style.height = '100%'
  svgEl.style.maxWidth = 'none'
  svgEl.style.maxHeight = 'none'
  svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet')

  const instance = svgPanZoom(svgEl, {
    zoomEnabled: true,
    panEnabled: true,
    fit: true,
    center: true,
    minZoom: 0.2,
    maxZoom: 10,
  })

  // ensure proper fit after layout
  await nextTick()
  await new Promise((r) => requestAnimationFrame(r))
  instance.fit()
  instance.center()
  return instance
}

// -------------- Controls -------------

function zoomIn() {
  ;(isModalOpen.value ? modalPanZoom : inlinePanZoom)?.zoomIn()
}

function zoomOut() {
  ;(isModalOpen.value ? modalPanZoom : inlinePanZoom)?.zoomOut()
}

function reset() {
  ;(isModalOpen.value ? modalPanZoom : inlinePanZoom)?.reset()
}

function destroyModal() {
  modalPanZoom?.destroy()
  modalPanZoom = null
}

// -------------- Watchers -------------

watch(() => props.source, generateSvg, { immediate: true })

watch(svgSource, async () => {
  await nextTick()
  inlinePanZoom = await mountSvg(inlineSvgHost.value, inlinePanZoom)
})

watch(isModalOpen, async (open) => {
  if (open) {
    await nextTick()
    await new Promise((r) => requestAnimationFrame(r))
    modalPanZoom = await mountSvg(modalSvgHost.value, modalPanZoom)
  } else {
    destroyModal()
  }
})

onBeforeUnmount(() => {
  inlinePanZoom?.destroy()
  inlinePanZoom = null
  destroyModal()
})
</script>

<template>
  <div class="mermaid-container relative border border-line rounded-xl p-4 bg-white overflow-hidden">
    <!-- Inline. The markup is SVG produced by mermaid.render from a .mmd file
         committed to this repo, never from user input. -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div ref="inlineSvgHost" class="svg-host" v-html="svgSource" />

    <!-- Controls -->
    <div class="absolute top-3 right-3 z-10 flex flex-col gap-2">
      <UModal
        v-model:open="isModalOpen"
        :ui="{ content: 'w-[85vw] h-[45vh] max-w-none' }"
        :title="props.title"
        description="Interactive mermaid diagram with pan and zoom controls"
      >
        <UButton icon="i-heroicons-arrows-pointing-out" size="xs" variant="solid" />
        <template #body>
          <div class="modal-container relative border rounded-lg bg-white overflow-hidden">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div ref="modalSvgHost" class="h-full w-full" v-html="svgSource" />
            <div class="absolute top-3 right-3 flex flex-col gap-2">
              <UButton icon="i-heroicons-plus" size="xs" @click="zoomIn()" />
              <UButton icon="i-heroicons-minus" size="xs" @click="zoomOut()" />
              <UButton icon="i-heroicons-arrow-path" size="xs" @click="reset()" />
            </div>
          </div>
        </template>
      </UModal>
      <UButton icon="i-heroicons-plus" size="xs" variant="solid" @click="zoomIn()" />
      <UButton icon="i-heroicons-minus" size="xs" variant="solid" @click="zoomOut()" />
      <UButton icon="i-heroicons-arrow-path" size="xs" variant="soft" @click="reset()" />
    </div>
  </div>
</template>

<style scoped>
.mermaid-container {
  cursor: grab;
}

.modal-container {
  height: 100%;
  cursor: grab;
  /* position: relative; */
  /* width: 100%; */
  /* overflow: hidden;  */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
}
</style>

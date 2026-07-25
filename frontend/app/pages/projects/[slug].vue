<script setup lang="ts">
import Mermaid from '~/components/Mermaid.vue'

const baseUrl = useRuntimeConfig().app.baseURL
const route = useRoute()
const slug = route.params.slug

// Simple loader: read JSON from content folder
const project = await import(`~/content/projects/${slug}.json`).then((m) => m.default)
const mermaidSource = ref<string | null>(null)

onMounted(async () => {
  if (!project.mermaidDiagram) return

  const url = new URL(baseUrl + project.mermaidDiagram, window.location.origin)
  mermaidSource.value = await fetch(url).then((r) => r.text())
})
</script>

<template>
  <div class="space-y-12">
    <div>
      <NuxtLink to="/projects" class="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent">
        <span aria-hidden="true">&larr;</span>
        All projects
      </NuxtLink>

      <div class="mt-6">
        <SectionHeader :title="project.title" :subtitle="project.tagline" />
      </div>
    </div>

    <div class="grid gap-12 lg:grid-cols-3 lg:gap-14">
      <div class="space-y-11 lg:col-span-2">
        <section>
          <h2 class="flex items-center gap-3 text-xl font-semibold tracking-tight">
            <span class="h-px w-6 bg-accent" aria-hidden="true" />
            Overview
          </h2>
          <p class="mt-4 text-lg leading-relaxed">{{ project.overview }}</p>
        </section>

        <section>
          <h2 class="flex items-center gap-3 text-xl font-semibold tracking-tight">
            <span class="h-px w-6 bg-accent" aria-hidden="true" />
            Architecture
          </h2>
          <p class="mt-4 leading-relaxed">{{ project.architectureSummary }}</p>
          <img v-if="project.diagram" :src="project.diagram" class="mt-6 rounded-xl border border-line" />
          <div v-if="mermaidSource" class="mt-6">
            <Mermaid :source="mermaidSource" :title="project.mermaidTitle" />
          </div>
        </section>

        <section v-if="project.decisions?.length">
          <h2 class="flex items-center gap-3 text-xl font-semibold tracking-tight">
            <span class="h-px w-6 bg-accent" aria-hidden="true" />
            Decisions That Mattered
          </h2>
          <ul class="mt-4 space-y-4">
            <li v-for="(d, i) in project.decisions" :key="i" class="border-l-2 border-line pl-4 leading-relaxed">
              <span class="font-semibold text-ink">{{ d.title }}.</span>
              {{ d.text }}
            </li>
          </ul>
        </section>

        <section v-if="project.technicalApproach?.length">
          <h2 class="flex items-center gap-3 text-xl font-semibold tracking-tight">
            <span class="h-px w-6 bg-accent" aria-hidden="true" />
            Technical Approach
          </h2>
          <ul class="mt-4 space-y-3">
            <li v-for="(t, i) in project.technicalApproach" :key="i" class="flex gap-3 leading-relaxed">
              <span class="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {{ t }}
            </li>
          </ul>
        </section>

        <section>
          <h2 class="flex items-center gap-3 text-xl font-semibold tracking-tight">
            <span class="h-px w-6 bg-accent" aria-hidden="true" />
            Outcome &amp; Lessons
          </h2>
          <p class="mt-4 leading-relaxed">{{ project.outcome }}</p>
        </section>
      </div>

      <aside class="space-y-6 lg:sticky lg:top-28 lg:self-start">
        <div class="surface-card p-6">
          <p class="eyebrow mb-3.5 text-muted">Stack</p>
          <ul class="flex flex-wrap gap-1.5">
            <li v-for="s in project.stack" :key="s">
              <TechTag>{{ s }}</TechTag>
            </li>
          </ul>
        </div>

        <div v-if="project.artifacts?.length" class="surface-card p-6">
          <p class="eyebrow mb-3.5 text-muted">Artifacts</p>
          <ul class="space-y-2.5 text-sm">
            <li v-for="(a, i) in project.artifacts" :key="i">
              <UModal :ui="{ content: 'w-[85vw] h-[85vh] max-w-none' }" :title="a.label" description="Asset images">
                <ULink
                  v-if="a.isImage"
                  as="button"
                  class="cursor-pointer text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
                >
                  {{ a.label }}
                </ULink>
                <template #body>
                  <img :src="baseUrl + a.link" />
                </template>
              </UModal>
              <ULink
                v-if="!a.isImage"
                :href="a.link"
                target="_blank"
                class="cursor-pointer text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                {{ a.label }}
              </ULink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

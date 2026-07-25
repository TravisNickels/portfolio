<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  stack: string[]
  slug?: string
  tagline?: string
  variant?: 'featured' | 'default' | 'muted'
}>()

const isFeatured = computed(() => props.variant === 'featured')
const isMuted = computed(() => props.variant === 'muted')
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden surface-interactive hover:surface-interactive-hover focus-within:surface-interactive-hover"
    :class="[isFeatured ? 'p-7 sm:p-9' : 'p-6 sm:p-7', isMuted ? 'bg-elevated' : '']"
  >
    <!-- accent rule reserved for the featured project -->
    <span v-if="isFeatured" class="absolute inset-x-0 top-0 h-0.5 bg-accent" aria-hidden="true" />

    <p v-if="isFeatured" class="eyebrow mb-4 text-accent">Featured work</p>

    <h3 class="font-semibold tracking-tight" :class="isFeatured ? 'text-2xl sm:text-3xl' : isMuted ? 'text-lg' : 'text-xl'">
      {{ title }}
    </h3>
    <p v-if="tagline" class="mt-1.5 text-sm text-muted">{{ tagline }}</p>

    <p class="mt-4 leading-relaxed" :class="[isFeatured ? 'text-lg max-w-3xl' : 'text-[15px]', isMuted ? 'line-clamp-3 text-muted' : '']">
      {{ description }}
    </p>

    <ul class="mt-5 flex flex-wrap gap-1.5">
      <li v-for="s in stack" :key="s">
        <TechTag>{{ s }}</TechTag>
      </li>
    </ul>

    <div v-if="slug" class="mt-6 pt-1">
      <NuxtLink
        :to="`/projects/${slug}`"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-accent after:absolute after:inset-0 after:rounded-xl after:content-['']"
      >
        View project
        <span class="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  items: { text: string; link?: string }[]
}>()
</script>

<template>
  <section class="surface-card flex h-full flex-col p-6 sm:p-7">
    <h3 class="text-xl font-semibold tracking-tight">{{ title }}</h3>
    <p class="mt-2 text-[15px] leading-relaxed text-muted">{{ description }}</p>

    <ul class="mt-5 space-y-2.5 text-[15px]">
      <li v-for="i in items" :key="i.text" class="flex gap-2.5">
        <span class="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        <a
          v-if="i.link"
          :href="i.link"
          target="_blank"
          class="text-text underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          {{ i.text }}
        </a>
        <span v-else class="text-text">{{ i.text }}</span>
      </li>
    </ul>
  </section>
</template>

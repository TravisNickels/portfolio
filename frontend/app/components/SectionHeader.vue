<script setup lang="ts">
defineProps<{ title: string; subtitle?: string; eyebrow?: string }>()
</script>

<template>
  <header class="max-w-3xl">
    <p v-if="eyebrow" class="eyebrow mb-3 text-accent">{{ eyebrow }}</p>
    <h1 class="text-4xl sm:text-5xl font-semibold tracking-tight">{{ title }}</h1>
    <p v-if="subtitle" class="mt-4 text-lg leading-relaxed text-muted">{{ subtitle }}</p>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string; eyebrow?: string; description?: string }>()
</script>

<template>
  <div class="max-w-3xl">
    <p v-if="eyebrow" class="eyebrow mb-2 text-accent">{{ eyebrow }}</p>
    <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">{{ title }}</h2>
    <p v-if="description" class="mt-3 leading-relaxed text-muted">{{ description }}</p>
  </div>
</template>

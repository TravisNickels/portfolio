<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>

<template>
  <div class="grid gap-6 lg:grid-cols-2">
    <ProjectCard
      v-for="p in items"
      :key="p.slug ?? p.title"
      :title="p.title"
      :description="p.description"
      :stack="p.stack"
      :slug="p.slug"
      :tagline="p.tagline"
      :variant="p.variant"
      :class="p.variant === 'featured' || p.variant === 'muted' ? 'lg:col-span-2' : ''"
    />
  </div>
</template>

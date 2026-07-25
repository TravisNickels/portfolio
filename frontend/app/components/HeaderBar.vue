<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Impact', to: '/impact' },
    { label: 'Resume', to: '/resume' },
    { label: 'Contact', to: '/contact' },
    { label: 'About', to: '/about' },
  ],
])
</script>

<template>
  <UHeader class="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur-md">
    <template #left>
      <NuxtLink to="/" class="group flex items-baseline gap-2 text-lg font-semibold tracking-tight">
        <span class="text-ink">Travis Nickels</span>
        <span class="hidden font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-accent sm:inline">
          Technology leader
        </span>
      </NuxtLink>
    </template>
    <template #right>
      <UNavigationMenu :items="items" variant="link" color="primary" highlight class="hidden md:flex" />
      <UColorModeButton />
    </template>
    <template #body>
      <UNavigationMenu :items="items" variant="link" color="primary" orientation="vertical" class="space-y-2" />
    </template>
  </UHeader>
</template>

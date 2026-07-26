<script setup lang="ts">
const baseUrl = useRuntimeConfig().app.baseURL
const pdfPath = baseUrl + 'resume/TravisNickels_TechnologyLeader_2026.pdf'
</script>

<template>
  <div class="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
    <div>
      <p class="eyebrow mb-2 text-accent">Resume</p>
      <p class="text-lg font-semibold tracking-tight text-ink">Roles, dates, and detail</p>
      <p class="mt-1 text-sm text-muted">Download a printable PDF or read it inline.</p>
    </div>

    <div class="flex shrink-0 gap-3">
      <UButton :to="pdfPath" download external color="primary" size="md" icon="i-lucide-download">Download PDF</UButton>
      <UButton to="/resume" color="neutral" variant="outline" size="md">View</UButton>
    </div>
  </div>
</template>

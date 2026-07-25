<script setup lang="ts">
const baseUrl = useRuntimeConfig().app.baseURL
const pdfPath = baseUrl + 'resume/TravisNickels_TechnologyLeader_2026.pdf'
</script>

<template>
  <div class="space-y-12">
    <SectionHeader title="Resume" subtitle="Download a printable PDF or view it inline." />

    <div class="grid gap-8 lg:grid-cols-3 lg:gap-10">
      <div class="lg:col-span-2">
        <iframe :src="pdfPath" title="Resume" class="h-[80vh] w-full rounded-xl border border-line bg-card" />
      </div>

      <aside class="space-y-6 lg:sticky lg:top-28 lg:self-start">
        <div class="surface-card p-6">
          <p class="eyebrow mb-3 text-accent">Quick summary</p>
          <p class="leading-relaxed">
            Technology leader with twenty years across regulated healthcare IT, distributed systems engineering, and end-to-end product ownership. I
            make architecture decisions with cost and business consequences in view.
          </p>
        </div>

        <div class="surface-card p-6">
          <p class="eyebrow mb-3 text-muted">Download</p>
          <UButton :to="pdfPath" download external color="primary" size="md" icon="i-lucide-download" block>Download PDF</UButton>
        </div>
      </aside>
    </div>
  </div>
</template>

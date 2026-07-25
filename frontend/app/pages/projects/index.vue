<script setup lang="ts">
import onDeviceVision from '~/content/projects/ondevicecomputervision.json'
import creadorasDeExito from '~/content/projects/creadorasdeexito.json'
import projectTracker from '~/content/projects/multifacilityprojecttracker.json'
import clientManager from '~/content/projects/clientmanagerdemo.json'

const projects = [
  { ...onDeviceVision, variant: 'featured' as const },
  creadorasDeExito,
  projectTracker,
  { ...clientManager, variant: 'muted' as const },
]
</script>

<template>
  <div class="space-y-12">
    <SectionHeader
      eyebrow="Selected work"
      title="Projects"
      subtitle="Shipped products first, then a reference implementation of the patterns underneath them."
    />

    <ProjectGrid :items="projects" />
  </div>
</template>

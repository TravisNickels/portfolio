<script setup lang="ts">
import rabbitmq from '~/content/impact/rabbitmq.json'
import testing from '~/content/impact/testarchitecture.json'
import research from '~/content/impact/research.json'
import documentation from '~/content/impact/documentation.json'
import design from '~/content/impact/design.json'

const categories = [rabbitmq, testing, research, documentation, design]
</script>

<template>
  <div class="space-y-12">
    <SectionHeader
      eyebrow="Track record"
      title="Impact"
      subtitle="Selected contributions demonstrating long-term reliability, clarity, and stewardship across distributed systems and tooling."
    />

    <p class="max-w-3xl text-lg leading-relaxed">
      This page highlights the work that improved platform reliability, test architecture, developer experience, and overall product health beyond
      discrete projects.
    </p>

    <div class="grid gap-6 lg:grid-cols-2">
      <ImpactCategory v-for="c in categories" :key="c.title" v-bind="c" />
    </div>
  </div>
</template>

<script setup lang="ts">
const channels = [
  { label: 'Email', value: 'nickels.travis@gmail.com', href: 'mailto:nickels.travis@gmail.com', icon: 'i-lucide-mail' },
  { label: 'GitHub', value: 'github.com/TravisNickels', href: 'https://github.com/TravisNickels', icon: 'i-simple-icons-github' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/travis-nickels',
    href: 'https://www.linkedin.com/in/travis-nickels/',
    icon: 'i-simple-icons-linkedin',
  },
]
</script>

<template>
  <div class="space-y-12">
    <SectionHeader title="Contact" subtitle="Getting in touch about roles, projects, or technical problems" />

    <div class="max-w-3xl space-y-8">
      <p class="text-lg leading-relaxed">
        Email is the easiest way to reach me. I am open to engineering roles and project work where clear thinking, system design, or workflow
        automation can make a real difference.
      </p>

      <ul class="grid gap-4 sm:grid-cols-2">
        <li v-for="c in channels" :key="c.label" :class="c.label === 'Email' ? 'sm:col-span-2' : ''">
          <a
            :href="c.href"
            :target="c.label === 'Email' ? undefined : '_blank'"
            class="group flex items-center gap-4 surface-interactive hover:surface-interactive-hover p-5"
          >
            <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-elevated text-accent">
              <UIcon :name="c.icon" class="size-5" />
            </span>
            <span class="min-w-0">
              <span class="eyebrow block text-muted">{{ c.label }}</span>
              <span class="mt-1 block truncate text-[15px] font-medium text-ink transition-colors group-hover:text-accent">{{ c.value }}</span>
            </span>
          </a>
        </li>
      </ul>

      <p class="leading-relaxed text-muted">
        If you are hiring or working through a technical challenge and want someone who brings clarity, steady problem solving, and a focus on
        reliable systems, feel free to reach out.
      </p>
    </div>
  </div>
</template>

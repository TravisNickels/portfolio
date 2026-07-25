<script setup lang="ts">
const year = new Date().getFullYear()

const nav = [
  { label: 'Projects', to: '/projects' },
  { label: 'Impact', to: '/impact' },
  { label: 'Resume', to: '/resume' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]
</script>

<template>
  <UFooter class="border-t border-line bg-card">
    <template #top>
      <UContainer class="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div class="max-w-sm">
          <p class="text-base font-semibold tracking-tight text-ink">Travis Nickels</p>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            Technology leader. Product architecture, on-device machine learning, distributed systems, and technical strategy.
          </p>
        </div>

        <nav aria-label="Footer">
          <p class="eyebrow mb-3 text-muted">Site</p>
          <ul class="space-y-2 text-sm">
            <li v-for="item in nav" :key="item.to">
              <NuxtLink :to="item.to" class="text-muted transition-colors hover:text-accent">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div>
          <p class="eyebrow mb-3 text-muted">Elsewhere</p>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="mailto:nickels.travis@gmail.com" class="text-muted transition-colors hover:text-accent">nickels.travis@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/TravisNickels" target="_blank" class="text-muted transition-colors hover:text-accent"
                >github.com/TravisNickels</a
              >
            </li>
            <li>
              <a href="https://www.linkedin.com/in/travis-nickels/" target="_blank" class="text-muted transition-colors hover:text-accent">
                linkedin.com/in/travis-nickels
              </a>
            </li>
          </ul>
        </div>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-muted">© {{ year }} Travis Nickels</p>
    </template>

    <template #right>
      <UButton
        to="https://github.com/TravisNickels"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://www.linkedin.com/in/travis-nickels/"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="LinkedIn"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>

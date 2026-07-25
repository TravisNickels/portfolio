<script setup>
const base = useRuntimeConfig().app.baseURL
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Travis Nickels' },
    { name: 'robots', content: 'index, follows' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: `${base}faviconTN.ico` }],
  htmlAttrs: {
    lang: 'en',
  },
})

const title = 'Travis Nickels - Technology Leader'
const description =
  'Technology leader. Twenty years spanning hospital IT delivery, distributed systems engineering, and on-device ML products built end to end for early-stage companies.'

const site = 'https://travisnickels.github.io/portfolio'

// Social platforms cache preview images by URL, so a new image needs a new
// filename. The previous ogImage.png stays in place so links already shared
// against it keep resolving.
const ogImage = `${site}/og-technology-leader-2026.png`
const ogImageAlt = 'Travis Nickels, technology leader. I turn ambiguous problems into products that ship.'

useSeoMeta({
  title,
  description,
  ogType: 'profile',
  ogUrl: `${site}/`,
  ogSiteName: 'Travis Nickels',
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogImageType: 'image/png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt,

  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: ogImage,
  twitterImageAlt: ogImageAlt,
})
</script>

<template>
  <UApp class="bg-surface text-text">
    <div class="min-h-screen flex flex-col">
      <HeaderBar />

      <!-- Expands to anchor footer to bottom of page -->
      <main class="flex-1 flex">
        <UContainer class="w-full py-14 sm:py-20">
          <NuxtPage />
        </UContainer>
      </main>

      <!-- <USeparator icon="i-simple-icons-nuxtdotjs" /> -->
      <FooterBar />
    </div>
  </UApp>
</template>

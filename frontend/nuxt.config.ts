// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui'],

  devtools: {
    enabled: true,
  },

  app: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? '/portfolio/' // GitHub Pages repo name, case sensitive
        : '/',
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      // Prettier owns formatting. These stylistic rules contradicted
      // .prettierrc.json (commaDangle 'never' against trailingComma 'es5'),
      // so no file could satisfy both and lint could never pass.
      stylistic: false,
    },
  },
})

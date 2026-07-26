// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      // Prettier self-closes void elements inside Vue templates, so the default
      // setting here would fight the formatter the same way the stylistic rules
      // did. Accept either form and let Prettier decide.
      'vue/html-self-closing': ['warn', { html: { void: 'any', normal: 'always', component: 'always' } }],
    },
  },
  {
    // Scoped to this file only. A blanket rule here would override the
    // exemption Nuxt applies to app/pages, where single-word component names
    // are the routing convention.
    files: ['app/components/Mermaid.vue'],
    rules: {
      // "Mermaid" is the name of the library this component wraps, so a second
      // word would only add noise.
      'vue/multi-word-component-names': 'off',
    },
  }
)

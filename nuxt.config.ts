// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Use project root as source directory so root-level app.vue/pages/components are used.
  srcDir: '.',
  app: {
    baseURL: '/DAC-april-onepager/',
    head: {
      title: 'Dutch AI Anime Community - DAIC',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Welcome to the Dutch AI Anime Community - An AI-first anime community experience.' },
        { name: 'robots', content: 'noindex, nofollow, noarchive' }, // Prevent indexing and crawling
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: './logo.svg' },
      ],
    },
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  css: ['./app.css'],

  // SPA mode for GitHub Pages + interactive features like cart
  ssr: false,

  typescript: {
    strict: false,
    typeCheck: false,
  },

  compatibilityDate: '2024-04-03',
})

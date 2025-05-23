// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      layers: [
        'tnt-content',
      ],
      collections: [
        'pages',
      ],
    },
  },
  modules: [
    '@nuxt/content',
  ],
  content: {
    build: {
      markdown: {
        toc: {
          // TODO: This can be set back to 2 when we have a better solution for our TntToc
          depth: 1,
        }
      }
    }
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  },
})

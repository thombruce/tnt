// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    static: true
  },
  site: {
    name: 'My Awesome Site',
    description: 'Where I post all my awesome stuff!',
    url: 'https://example.com/',
    copyright: 'Copyright © All rights reserved',
    ogComponent: 'TntColor',
    og: {
      website: null,
      color: null,
      image: null,
    }
  },
  routeRules: {
    /* Custom route rules */
  },
  runtimeConfig: {
    public: {
      collections: [
        /* Custom content collections */
      ],
    },
  },
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'error',
        'neutral',
      ],
    },
  },
  extends: [
    '@thombruce/tnt',
  ],
  modules: [
    /* Custom Modules */
  ],
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            /* Add your own languages if you want to support code highlighting in documents */
          ]
        },
      }
    }
  },
  i18n: {
    // strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  },
})

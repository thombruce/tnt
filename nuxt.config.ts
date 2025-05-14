// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  site: {
    name: 'My Awesome Site',
    description: 'Where I post all my awesome stuff!',
    url: 'https://example.com/',
    copyright: 'Copyright © All rights reserved',
    nav: true,
    backgroundPattern: false,
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
    '@thombruce/tnt-fancy',
    '@thombruce/tnt-web',
    '@thombruce/tnt-content',
  ],
  modules: [
    /* Custom Modules */
  ],
})

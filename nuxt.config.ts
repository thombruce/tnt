// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  site: {
    name: 'My Awesome Site',
    description: 'Where I post all my awesome stuff!',
    url: 'https://example.com/',
    copyright: 'Copyright © All rights reserved',
    company: {
      name: 'My Awesome Company', // Optional; will fallback to site.name
      email: '', // TODO: Consider need for separate email used for legal/privacy purposes?
      address: ``, // Optional
      telephone: '', // Optional
    },
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
    '@thombruce/tnt-fancy',
    '@thombruce/tnt-web',
    '@thombruce/tnt-content',
  ],
  modules: [
    /* Custom Modules */
  ],
  i18n: {
    // strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  },
})

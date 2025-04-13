// https://nuxt.com/docs/api/configuration/nuxt-config

import siteConfig from './config/site.config'
import routesConfig from './config/routes.config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  site: {
    name: siteConfig.name || 'TNT',
    description: siteConfig.description || 'Welcome to TNT!',
    url: siteConfig.url || 'https://example.com/',
    copyright: siteConfig.copyright || 'Copyright © All rights reserved',
    nav: siteConfig.nav || false,
  },
  routeRules: {
    ...routesConfig,
  },
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
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  },
})

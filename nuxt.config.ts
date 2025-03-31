// https://nuxt.com/docs/api/configuration/nuxt-config

import tntConfig from './tnt.config'

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
    '@nuxt/fonts',
    '@nuxt/eslint',
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
    name: tntConfig.name || 'TNT',
    description: tntConfig.description || 'Welcome to TNT!',
    url: tntConfig.url || 'https://example.com/',
    copyright: tntConfig.copyright || 'Copyright © All rights reserved',
    nav: tntConfig.nav || false,
  },
  routeRules: {
    '/docs/getting-started': { redirect: '/docs/getting-started/installation', prerender: false },
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
  }
})

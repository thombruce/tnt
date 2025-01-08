// https://nuxt.com/docs/api/configuration/nuxt-config

import tntConfig from './tnt.config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@nuxt/icon',
  ],
  routeRules: {
    ...tntConfig.routeRules,
  },
  nitro: {
    static: true,
  },
  content: {},
  tailwindcss: {},
  colorMode: {},
  site: {
    name: tntConfig.name || 'TNT',
    description: tntConfig.description || 'Welcome to TNT!',
    url: tntConfig.url || 'https://example.com/',
    copyright: tntConfig.copyright || 'Copyright © All rights reserved',
    defaultLocale: tntConfig.defaultLocale || 'en', // not needed if you have @nuxtjs/i18n installed
  },
  ogImage: {
    defaults: {
      emojis: 'fluent-emoji'
    }
  },
  sitemap: {
    strictNuxtContentPaths: true
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config

import tntConfig from './tnt.config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxtjs/seo',
  ],
  css: ['~/assets/css/main.css'],
  site: {
    name: tntConfig.name || 'TNT',
    description: tntConfig.description || 'Welcome to TNT!',
    url: tntConfig.url || 'https://example.com/',
    copyright: tntConfig.copyright || 'Copyright © All rights reserved',
    nav: tntConfig.nav || false,
  },
})

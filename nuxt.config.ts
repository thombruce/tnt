// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "node:path";

import tntConfig from './tnt.config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    'nuxt-lodash',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  routeRules: {
    ...tntConfig.routeRules,
  },
  nitro: {
    // ISSUE: https://github.com/nuxt/image/issues/1397
    static: process.env.NODE_ENV !== 'development',
    prerender: {
      failOnError: false, // NOTE: Prevents failure when links are generated for non-existent content docs; is there a better way?
    },
  },
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
  content: {
    sources: {
      uploads: {
        driver: 'fs',
        prefix: '/uploads',
        base: resolve(__dirname, 'public/uploads')
      }
    },
  },
  tailwindcss: {},
  colorMode: {},
  site: {
    name: tntConfig.name || 'TNT',
    description: tntConfig.description || 'Welcome to TNT!',
    url: tntConfig.url || 'https://example.com/',
    copyright: tntConfig.copyright || 'Copyright © All rights reserved',
    defaultLocale: tntConfig.defaultLocale || 'en', // not needed if you have @nuxtjs/i18n installed
  },
  icon: {
    serverBundle: 'remote',
    clientBundle: {
      scan: true
    },
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
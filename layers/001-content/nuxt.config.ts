// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/content',
  ],
  css: [
    join(currentDir, './assets/css/main.css')
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
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' }
    ]
  },
})

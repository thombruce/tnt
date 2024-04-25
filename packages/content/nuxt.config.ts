// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtConfig({
  extends: [
    '@thombruce/tnt'
  ],
  modules: [
    '@nuxt/content',
  ],
  content: {
    documentDriven: true,
    respectPathCase: true,
    highlight: {
      theme: {
        default: 'github-dark'
      }
    },
    sources: {
      authors: {
        prefix: '/_data',
        driver: 'fs',
        base: 'data'
      }
    },
    markdown: {
      tags: {
        img: 'TntImg'
      }
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/feed.xml']
    }
  },
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { createResolver, defineNuxtModule } from '@nuxt/kit'

const FountainJS = defineNuxtModule({
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.options.nitro.externals = nuxt.options.nitro.externals || {}
    nuxt.options.nitro.externals.inline = nuxt.options.nitro.externals.inline || []
    nuxt.options.nitro.externals.inline.push(resolve('./fountain'))
    // @ts-ignore
    nuxt.hook('content:context', (contentContext) => {
      contentContext.transformers.push(resolve('./fountain/transformer.ts'))
    })
  }
})

export default defineNuxtConfig({
  extends: [
    '@thombruce/tnt'
  ],
  modules: [
    FountainJS,
    '@nuxt/content',
  ],
  css: ['@thombruce/fountainjs/src/fountain.css'],
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

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  extends: [
    '@thombruce/tnt'
  ],
  modules: [
    '@nuxt/content',
  ],
  content: {
    // documentDriven: true,
    markdown: {
      tags: {
        img: 'TntImg'
      }
    },
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      }
    },
    navigation: {
      fields: ['link']
    },
    respectPathCase: true,
    sources: {
      authors: {
        prefix: '/_data',
        driver: 'fs',
        base: 'data'
      }
    },
    experimental: {
      search: true,
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/feed.xml']
    }
  },
})

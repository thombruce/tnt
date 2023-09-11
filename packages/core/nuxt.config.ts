// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-icon',
  ],
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
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
  colorMode: {
    dataValue: 'theme'
  },
})

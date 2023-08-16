// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  image: {
    // Options
  },
  content: {
    documentDriven: true,
    respectPathCase: true,
    highlight: {
      theme: {
        default: 'github-dark'
      }
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})

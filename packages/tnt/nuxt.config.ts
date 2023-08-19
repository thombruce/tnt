// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
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
      routes: ['/sitemap.xml', '/feed.xml']
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
})

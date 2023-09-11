// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-icon',
  ],
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
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

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    'nuxt-icon',
  ],
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
  colorMode: {
    dataValue: 'theme'
  },
})

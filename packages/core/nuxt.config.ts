// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-icon',
  ],
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  colorMode: {
    dataValue: 'theme'
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
})

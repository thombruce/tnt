import { createResolver, defineNuxtModule } from '@nuxt/kit'

const i18nTNT = defineNuxtModule({
  async setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.hook('i18n:registerModule', register => {
      register({
        langDir: resolve('./i18n'),
        locales: [
          {
            code: 'en',
            file: 'en.json',
          },
          {
            code: 'fr',
            file: 'fr.json',
          },
        ]
      })
    })
  }
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    i18nTNT,
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
    strategy: 'no_prefix'
  }
})

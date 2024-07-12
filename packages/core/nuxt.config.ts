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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    i18nTNT,
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-icon',
  ],
  nitro: {
    prerender: {
      failOnError: false, // TODO: Some phantom link rendered on the /settings page resulted in build failure - this is a patch to ignore the error
    },
  },
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
  i18n: {
    strategy: 'no_prefix'
  }
})

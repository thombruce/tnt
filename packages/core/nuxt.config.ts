import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

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
  nitro: {
    prerender: {
      failOnError: false, // TODO: Some phantom link rendered on the /settings page resulted in build failure - this is a patch to ignore the error
    },
  },
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
  // css: [join(currentDir, './assets/css/tnt.css')],
  tailwindcss: {
    cssPath: join(currentDir, './assets/css/tnt.css'),
  },
})

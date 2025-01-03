import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const fs = require('fs')

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
    '@vee-validate/nuxt',
    '@pinia/nuxt',
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
    configPath: fs.existsSync('./tailwind.config.js') ? './tailwind.config.js'
      : fs.existsSync('./tailwind.config.ts') ? './tailwind.config.ts'
      : join(currentDir, './tailwind.preset.js'),
    cssPath: join(currentDir, './assets/css/tnt.css'),
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classPrefix: '',
    classSuffix: '',
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  compatibilityDate: '2024-07-30',
})
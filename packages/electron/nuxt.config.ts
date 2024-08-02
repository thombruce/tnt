// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const fs = require('fs')

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  extends: [
    '@thombruce/tnt'
  ],
  modules: [
    // Retain otherwise disabled build-only options. See: https://github.com/caoxiemeihao/nuxt-electron/issues/74#issuecomment-2117567168
    process.env.ELECTRON ? (options, nuxt) => {
      if (!nuxt.options.dev) {
        nuxt.options.nitro.runtimeConfig ??= {}
        nuxt.options.nitro.runtimeConfig.app ??= {}
        nuxt.options.nitro.runtimeConfig.app.baseURL = './'
      }
    } : undefined,
    process.env.ELECTRON ? 'nuxt-electron' : undefined,
  ],
  electron: {
    disableDefaultOptions: true,
    build: [
      {
        entry: fs.existsSync('./electron/main.ts') ? './electron/main.ts'
          : join(currentDir, './electron/main.ts'),
      },
    ],
  },
  // ssr: false,
  // router: {
  //   options: {
  //     hashMode: true
  //   }
  // },
})

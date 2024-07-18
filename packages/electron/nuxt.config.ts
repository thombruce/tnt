// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  extends: [
    '@thombruce/tnt'
  ],
  modules: [],
})

import { defineNuxtModule } from '@nuxt/kit'

const colors = require('tailwindcss/colors')

export default defineNuxtModule({
  setup (options, nuxt) {
    nuxt.hook('tailwindcss:config', function (tailwindConfig) {
      Object.assign(tailwindConfig.theme.extend.colors, {
        primary: {...colors.sky, ...{
          DEFAULT: colors.sky['500'],
          hover: colors.sky['600'],
          light: {
            DEFAULT: colors.sky['500'],
            hover: colors.sky['600'],
          },
          dark: {
            DEFAULT: colors.sky['600'],
            hover: colors.sky['500'],
          },
        }},
      })
    })
  }
})

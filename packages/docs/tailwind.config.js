/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  presets: [
    require('@thombruce/tnt/tailwind.preset'),
  ],
  theme: {
    extend: {
      colors: {
        primary: {...colors.rose, ...{
          DEFAULT: colors.rose['500'],
          hover: colors.rose['600'],
          light: {
            DEFAULT: colors.rose['500'],
            hover: colors.rose['600'],
          },
          dark: {
            DEFAULT: colors.rose['500'],
            hover: colors.rose['400'],
          },
        }},
      },
    },
  },
}

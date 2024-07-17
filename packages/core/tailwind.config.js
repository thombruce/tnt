/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        base: {...colors.zinc, ...{
          DEFAULT: colors.zinc['50'],
          light: colors.zinc['50'],
          dark: colors.zinc['950'],
        }},

        content: {...colors.zinc, ...{
          DEFAULT: colors.zinc['900'],
          light: colors.zinc['900'],
          dark: colors.zinc['100'],
        }},

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
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}

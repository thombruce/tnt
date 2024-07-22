/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const palette = {
  neutral: {...colors.zinc, ...{
    DEFAULT: colors.zinc['500'],
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

  danger: {...colors.red, ...{
    DEFAULT: colors.red['500'],
    hover: colors.red['600'],
    light: {
      DEFAULT: colors.red['500'],
      hover: colors.red['600'],
    },
    dark: {
      DEFAULT: colors.red['600'],
      hover: colors.red['500'],
    },
  }},

  warning: {...colors.amber, ...{
    DEFAULT: colors.amber['500'],
    hover: colors.amber['600'],
    light: {
      DEFAULT: colors.amber['500'],
      hover: colors.amber['600'],
    },
    dark: {
      DEFAULT: colors.amber['600'],
      hover: colors.amber['500'],
    },
  }},

  success: {...colors.green, ...{
    DEFAULT: colors.green['500'],
    hover: colors.green['600'],
    light: {
      DEFAULT: colors.green['500'],
      hover: colors.green['600'],
    },
    dark: {
      DEFAULT: colors.green['600'],
      hover: colors.green['500'],
    },
  }},
}

export default {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        ...palette,
        ...{
          base: { ...palette.neutral, ...{
            DEFAULT: palette.neutral['50'],
            light: palette.neutral['50'],
            dark: palette.neutral['950'],
          }},
          content: {...palette.neutral, ...{
            DEFAULT: palette.neutral['900'],
            light: palette.neutral['900'],
            dark: palette.neutral['100'],
          }},
          error: palette.danger,
        }
      },
    },
  },
}

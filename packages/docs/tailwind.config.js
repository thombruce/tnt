/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  presets: [
    require('@thombruce/tnt/tailwind.preset'),
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
}

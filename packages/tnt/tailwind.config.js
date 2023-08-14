/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      "lofi",
      { dark: { ...require("daisyui/src/theming/themes")["[data-theme=black]"] }
      }
    ]
  }
}


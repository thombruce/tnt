/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      "lofi",
      { dark: { ...require("daisyui/src/theming/themes")["[data-theme=black]"] }
      }
    ]
  }
}

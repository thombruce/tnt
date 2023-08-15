/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      { light: { ...require("daisyui/src/theming/themes")["[data-theme=lofi]"] } },
      { dark: { ...require("daisyui/src/theming/themes")["[data-theme=black]"] } }
    ]
  }
}

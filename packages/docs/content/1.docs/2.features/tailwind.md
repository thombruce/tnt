# Tailwind

:breadcrumbs

:toc

TNT comes with a set of default styles and layouts powered by [Tailwind](https://tailwindcss.com/).

## Usage

It includes several semantic classes that work a lot like Tailwind's utility classes:

- `bg-base`
- `text-content-dark`

There are special utility classes intended for use with Tailwind's modifiers:

- `hover:border-primary-hover`

And every semantic class features the full range of numeric colors, based on Tailwind's own default color selection:

- `text-primary-500`

## Customization

The example below changes TNT's primary color utilities to match Tailwind's cyan.

```js [tailwind.config.js]
const colors = require('tailwindcss/colors')

export default {
  presets: [
    // It is ESSENTIAL that you include the preset:
    require('@thombruce/tnt/tailwind.preset'),
  ],
  theme: {
    extend: {
      colors: {
        primary: {...colors.cyan, ...{
          DEFAULT: colors.cyan['500'],
          hover: colors.cyan['600'],
          light: {
            DEFAULT: colors.cyan['500'],
            hover: colors.cyan['600'],
          },
          dark: {
            DEFAULT: colors.cyan['500'],
            hover: colors.cyan['400'],
          },
        }},
      },
    },
  },
}
```

:prev-next

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
  ],
  content: {},
  tailwindcss: {},
  colorMode: {},
  site: {
    url: 'https://dummy-nine-inky.vercel.app/', // TODO: Change me!
    name: 'TNT',
    description: 'Welcome to TNT!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
})
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    'nuxt-lodash',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  lodash: {
    prefix: "_",
    upperAfterPrefix: false,
  },
  content: {
    documentDriven: {
      globals: {
        config: {
          where: {
            _id: 'content:_config.yml'
          }
        }
      },
      layoutFallbacks: ['config'],
    },
    respectPathCase: true,
    highlight: {
      theme: {
        default: 'github-dark'
      }
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/feed.xml']
    }
  },
  colorMode: {
    dataValue: 'theme'
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
})

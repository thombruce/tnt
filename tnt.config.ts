import type { NavigationMenuItem } from "@nuxt/ui"

const config = {
  /* Site Config */
  site: {
    name: null,
    description: null,
    url: null,
    copyright: null,
    defaultLocale: 'en',
    nav: true,
    backgroundPattern: 'topography',
  },

  /* Collections */
  collections: [
    'pages',
    'blog',
    'docs',
  ],

  /* Route Rules */
  routeRules: {
    /* Custom route rules */
  }
} as TntConfig

export const siteConfig = config.site
export const collections = config.collections
export const routeRules = config.routeRules

/* TYPES */
type TntConfig = {
  site: SiteConfig,
  collections?: CollectionList,
  routeRules?: RouteRules
}

type SiteConfig = {
  name: string | null,
  description: string | null,
  url: string | null,
  copyright: string | null,
  defaultLocale: string,
  nav: NavigationMenuItem[] | boolean,
  backgroundPattern?: string | false | null,
}

type CollectionList = string[]

type RouteRules = {
  [k: string]: {
    redirect?: string,
    ssr?: boolean,
    cors?: boolean,
    headers?: object,
    swr?: number | boolean,
    isr?: number | boolean,
    prerender?: boolean,
    noScripts?: boolean,
    appMiddleware?: string | string[] | Record<string, boolean>,
  }
}

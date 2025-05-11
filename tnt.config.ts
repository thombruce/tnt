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

  /* Route Rules */
  routeRules: {
    /* Custom route rules */
  }
} as TntConfig

export const siteConfig = config.site
export const routeRules = config.routeRules

/* TYPES */
type TntConfig = {
  site: SiteConfig,
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

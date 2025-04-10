import type { NavigationMenuItem } from "@nuxt/ui"

export default {
  name: null,
  description: null,
  url: null,
  copyright: null,
  defaultLocale: 'en',
  nav: true,
} as SiteConfig

/* TYPES */
type SiteConfig = {
  name: string | null,
  description: string | null,
  url: string | null,
  copyright: string | null,
  defaultLocale: string,
  nav: NavigationMenuItem[] | boolean,
}

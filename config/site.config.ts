import type { NavigationMenuItem } from "@nuxt/ui"

const name: string | null = null

const description: string | null = null

const url: string | null = null

const copyright: string | null = null

// TODO: defaultLocale is currently unused. Determine whether we need this or if i18n should be handled differently.
const defaultLocale: string = 'en'

const nav: NavigationMenuItem[] | boolean = true

export default {
  name,
  description,
  url,
  copyright,
  defaultLocale,
  nav,
}

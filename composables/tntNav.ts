import type { ContentNavigationItem, PageCollections } from "@nuxt/content"
import type { NavigationMenuItem } from "@nuxt/ui"

const mapContentNavToUI = (items: ContentNavigationItem[]): NavigationMenuItem[] => {
  return items.map(item => {
    return {
      label: item.title as string,
      description: item.description as string,
      icon: item.icon as string,
      to: item.path as string,
      children: item.children ? mapContentNavToUI(item.children) : undefined,
      defaultOpen: true,
    }
  })
}

export const queryNav = async (collection?: keyof PageCollections) => {
  const nav = []

  if (collection) {
    const collectionNav = await queryCollectionNavigation(collection)
    nav.push(...mapContentNavToUI(collectionNav))
  } else for (const coll of tntContentCollections) {
    const collectionNav = await queryCollectionNavigation(coll)
    nav.push(...mapContentNavToUI(collectionNav))
  }

  return nav
}

export const tntNav = async (nav: NavigationMenuItem[] | boolean, collection?: keyof PageCollections) => {
  let navItems: NavigationMenuItem[]

  if (typeof nav === "boolean" && nav === true) {
    const data = await queryNav(collection)

    navItems = data
  } else {
    navItems = nav || []
  }

  return navItems
}

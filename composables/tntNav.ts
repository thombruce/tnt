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
    }
  })
}

export const queryNav = async () => {
  const nav = []

  for (const collection of tntContentCollections) {
    const collectionNav = await queryCollectionNavigation(collection)
    nav.push(...mapContentNavToUI(collectionNav))
  }

  return nav
}

// TODO: It seems kind of redundant to me to be passing nav and collection, right?
// The idea is to have the collection be used if nav is true... so it's kind of implicit.
// And look at the below. If we're given a valid nav object, we're just returning exactly that.
// ...so I think some of this logic should be moved back to the component.
export const tntNav = async (nav: NavigationMenuItem[] | boolean) => {
  let navItems: NavigationMenuItem[]

  if (typeof nav === "boolean" && nav === true) {
    const data = await queryNav()

    navItems = data
  } else {
    navItems = nav || []
  }

  return navItems
}

import type { ContentNavigationItem } from '@nuxt/content'
import type { BreadcrumbItem } from '@nuxt/ui'

export const tntCrumbs = async (path: string) => {
  const params = path.split('/').filter(item => item)

  let navigation: ContentNavigationItem[] = await queryCollectionNavigation('content')

  const home: ContentNavigationItem | undefined = navigation.find(item => item.path === '/')

  const navItems: BreadcrumbItem[] = home ? [{ label: home.title, icon: home.icon as string | undefined, to: home.path }] : [{ label: 'Home', to: '/' }]

  let param = ''

  params.forEach((p) => {
    param = `${param}/${p}`

    const item = navigation.find(item => item.path === param)

    if (item) {
      navItems.push({
        label: item.title,
        icon: item.icon as string | undefined,
        to: item.path,
      })
    }

    if (item?.children) {
      navigation = item.children
    }
  })

  return navItems
}

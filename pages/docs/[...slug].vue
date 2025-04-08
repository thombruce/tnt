<script lang="ts" setup>
import type { LayoutKey } from '#build/types/layouts'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})

const layout = (page.value?.layout || 'default') as LayoutKey

const { data: navItems } = await useAsyncData(`tntNav-for-docs`, () => {
  return tntNav(true, 'docs')
  // TODO: Look and see if we can tweak tntNav to allow adjustable start and
  //       end depths.
})

defineOgImageComponent('TNT',
  {
    title: page.value?.title || null,
    description: page.value?.description || null,
    icon: page.value?.icon || null,
    // siteName: name,
    colorMode: 'dark',
    // theme: '#dc2626'
  }
)
</script>

<template lang="pug">
NuxtLayout(:name="layout" collection="docs")
  template(#nav)
    UNavigationMenu(:items="navItems || undefined" orientation="vertical" class="")/

  ContentRenderer(
    v-if="page"
    :value="page"
    class="prose \
          dark:prose-invert \
          max-w-none"
  )/

  template(#toc)
    TntToc(:toc="page?.body.toc")
</template>

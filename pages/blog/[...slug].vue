<script lang="ts" setup>
import type { LayoutKey } from '#build/types/layouts'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

const layout = (page.value?.layout || 'default') as LayoutKey

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
NuxtLayout(:name="layout" collection="blog")
  TntBlogHeader(v-if="page" :page="page")/

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

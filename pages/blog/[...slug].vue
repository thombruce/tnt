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
NuxtLayout(:name="layout")
  .grid.grid-cols-10.gap-10
    .col-span-8
      TntBreadcrumbs(collection="blog")/
      template(v-if="page")
        TntBlogHeader(:page="page")/

        ContentRenderer(
          :value="page"
          class="prose \
                dark:prose-invert \
                max-w-none"
          
        )/
      TntPrevNext(collection="blog")/
    .col-span-2
      TntToc(:toc="page?.body.toc")
</template>

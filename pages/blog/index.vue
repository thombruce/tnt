<script lang="ts" setup>
import type { LayoutKey } from '#build/types/layouts'

const route = useRoute()

// TODO: Enable layout to be set in .navigation.yml (?)
const layout = ('default') as LayoutKey

const { data: items } = await useAsyncData(`tntList-for-blog`, () => {
  return queryCollection('blog')
    .where('extension', '=', 'md')
    .select('title', 'path', 'description', 'date')
    .order('date', 'DESC')
    .all()
})

// TODO: Add OgImageComponent
</script>

<template lang="pug">
NuxtLayout(:name="layout")
  .grid.grid-cols-10.gap-10
    .col-span-10
      TntBreadcrumbs(collection="blog")/
      h1.text-4xl.font-extrabold Blog
      div.my-4.space-y-4
        ULink.block(v-if="items" v-for="item in items" :to="item.path")
          UCard
            h2.text-2xl.font-extrabold {{ item.title }}
            p {{ item.description }}
</template>

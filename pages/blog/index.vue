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
NuxtLayout(:name="layout" collection="blog")
  h1.text-4xl.font-extrabold Blog
  TntArticleList(collection="blog" path="/blog" :order="{ field: 'date', direction: 'DESC' }")
</template>

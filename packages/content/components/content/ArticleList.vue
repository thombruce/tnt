<script setup lang="ts">
const route = useRoute()

const props = defineProps(['path'])

const path = props.path || route.path

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {
  where: [
    { navigation: { $ne: false } },
    { _path: {
      $regex: new RegExp(`^${path.replace(/\/$/, "")}/.+`)
    } },
    { _dir: path.split('/').slice(-1)[0] },
    { _partial: false }
  ],
  // TODO: Let Nuxt sort by stem by default (this is how it would handle it if this were omitted).
  //       Pass sort as an option to the component.
  //       - Also make this possible when marking a document for the list layout
  sort: [{ date: -1 }]
}
</script>

<template lang="pug">
ContentList(:query="query")
  template(#default="{ list }")
    .not-prose
      ul.divide-y(class="divide-gray-500/50")
        li.py-5(v-for="article in list" :key="article._path")
          NuxtLink(:to="article._path")
            strong.text-lg {{ article.navigation?.title || article.title }}
          p {{ article.description }}
  template(#not-found)
    p No articles found.
</template>

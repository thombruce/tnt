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
  sort: [{ date: -1 }]
}
</script>

<template lang="pug">
.not-prose
  ContentList(v-slot="{ list }" :query="query")
    ul.divide-y(class="divide-gray-500/50")
      li.py-5(v-for="article in list" :key="article._path")
        NuxtLink(:to="article._path")
          strong.text-lg {{ article.navigation?.title || article.title }}
        p {{ article.description }}
</template>

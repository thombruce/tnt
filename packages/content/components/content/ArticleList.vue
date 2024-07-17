<script setup lang="ts">
const route = useRoute()

const props = defineProps(['path', 'sort'])

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
  sort: props.sort
}
</script>

<template lang="pug">
div
  ContentList(:query="query")
    template(#default="{ list }")
      .not-prose
        ul(class="divide-y divide-gray-500/50")
          template(v-for="article in list" :key="article._path")
            li.py-5
              NuxtLink(:to="article._path")
                strong.text-lg {{ article.navigation?.title || article.title }}
              p {{ article.description }}
    template(#not-found)
      strong.text-lg No articles found.
</template>

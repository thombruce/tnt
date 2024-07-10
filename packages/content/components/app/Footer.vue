<script setup lang="ts">
const { copyright } = useAppConfig()

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/', where: [{ navigation: { $eq: false }, _dir: '' }] }
</script>

<template lang="pug">
footer.mt-4
  small {{ copyright }}

  .hidden
    ContentList(:query="query")
      template(#default="{ list }")
        ul
          li(v-for="article in list" :key="article._path")
            NuxtLink(:to="article._path") {{ article.title }}
      template(#not-found)
</template>

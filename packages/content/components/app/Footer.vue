<script setup lang="ts">
const appConfig = useAppConfig()

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/', where: [{ navigation: { $eq: false }, _dir: '' }] }
</script>

<template lang="pug">
footer.footer.footer-center.p-10
  small {{ appConfig.copyright }}

  .hidden
    ContentList(:query="query")
      template(#default="{ list }")
        ul
          li(v-for="article in list" :key="article._path")
            NuxtLink(:to="article._path") {{ article.title }}

      template(#not-found)
</template>

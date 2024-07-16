<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const { copyright } = useAppConfig()

const query: QueryBuilderParams = { path: '/', where: [{ navigation: { $eq: false }, _dir: '' }] }
</script>

<template lang="pug">
footer
  AppFooterContent
  .tnt-copyright
    small {{ copyright }}
  .hidden
    ContentList(:query="query")
      template(#default="{ list }")
        ul
          li(v-for="article in list" :key="article._path")
            NuxtLink(:to="article._path") {{ article.title }}
      template(#not-found)
</template>

<style lang="postcss" scoped>
footer {
  @apply mt-4 text-center;
}
</style>

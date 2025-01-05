<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const { path } = useRoute()

const query: QueryBuilderParams = { path, where: [{ _path: { $regex: new RegExp(`^${path.replace(/\/$/, "")}/[^/]+$`) } }] }
</script>

<template lang="pug">
div
  ContentList(:query="query")
    template(#default="{ list }")
      article(v-for="document in list" :key="document._path")
        h2
          NuxtLink(:to="document._path") {{ document.navigation?.title || document.title }}
        p {{ document.description }}
    template(#not-found)
</template>

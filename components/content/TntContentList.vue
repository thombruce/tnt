<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const { path } = useRoute()

const query: QueryBuilderParams = { path, where: [{ _path: { $regex: new RegExp(`^${path.replace(/\/$/, "")}/[^/]+$`) } }] }
</script>

<template lang="pug">
div
  ContentList(:query="query")
    template(#default="{ list }")
      article(v-for="page in list" :key="page._path")
        h2
          NuxtLink(:to="page._path") {{ page.navigation?.title || page.title }}
        p {{ page.description }}
    template(#not-found)
</template>

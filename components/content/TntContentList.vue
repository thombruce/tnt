<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const route = useRoute()

const { path = undefined, sort = undefined, preview = 'description' } = defineProps<{
  path?: string,
  sort?: any,
  preview?: string
}>()

const query: QueryBuilderParams = {
  path: path || route.path,
  where: [
    { _path: { $regex: new RegExp(`^${(path || route.path).replace(/\/$/, "")}/[^/]+$`) } },
    { _partial: false }
  ],
  sort: sort
}
</script>

<template lang="pug">
div
  slot(:list="list")
    ContentList(:query="query")
      template(#default="{ list }")
        TntContent(v-for="page in list" :page="page")

      template(#not-found)
</template>

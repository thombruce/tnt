<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const route = useRoute()

const { path = undefined, where = undefined, sort = undefined, preview = 'description' } = defineProps<{
  path?: string,
  where?: any,
  sort?: any,
  preview?: string,
}>()

const query: QueryBuilderParams = {
  path: path || route.path,
  where: [
    where || {},
    { _partial: false }
  ],
  sort: sort
}
</script>

<template lang="pug">
div
  ContentList(:query="query")
    template(#default="{ list }")
      slot(:list="list")
        TntContent(v-for="page in list" :page="page" :preview="preview")

    template(#not-found)
</template>

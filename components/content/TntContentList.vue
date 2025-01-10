<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const route = useRoute()

const props = defineProps([
  'path',
  'sort',
])

const path = props.path || route.path

const query: QueryBuilderParams = {
  path,
  where: [{ _path: { $regex: new RegExp(`^${path.replace(/\/$/, "")}/[^/]+$`) } }],
  sort: props.sort
}
</script>

<template lang="pug">
div
  ContentList(:query="query")
    template(#default="{ list }")
      article(v-for="page in list" :key="page._path")
        header.mb-2
          h2.mb-1
            NuxtLink(:to="page._path")
              Icon.mr-4(v-if="page.icon" :name="page.icon")
              | {{ page.navigation?.title || page.title }}

          date.text-sm.text-gray-500(v-if="page.createdAt || page.created || page.date") {{ page.createdAt || page.created || page.date }}

        MDC(v-if="page.description" :value="page.description" unwrap="p")

    template(#not-found)
</template>

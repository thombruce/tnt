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
  ContentList(:query="query")
    template(#default="{ list }")
      article(v-for="page in list" :key="page._path")
        header.mb-2
          h2.mb-1
            NuxtLink(:to="page._path")
              Icon.mr-4(v-if="page.icon" :name="page.icon")
              | {{ page.navigation?.title || page.title }}

          time.text-sm.text-gray-500(v-if="page.createdAt || page.created || page.date") {{ new Date(page.createdAt || page.created || page.date).toDateString() }}

        MDC(v-if="page[preview]" :value="page[preview]" unwrap="p")

        section
          TntContentAttachments(v-if="page.attachments" :attachments="page.attachments")/

    template(#not-found)
</template>

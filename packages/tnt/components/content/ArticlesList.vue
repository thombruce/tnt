<script setup lang="ts">
const route = useRoute()

const props = defineProps(['path'])

const path = props.path || route.path

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {
  where: [
    { navigation: { $ne: false } },
    { _path: { $contains: path } },
    { _dir: path.split('/').slice(-1)[0] }
  ]
}
</script>

<template>
    <ContentList :query="query">
      <template #default="{ list }">
        <ul>
          <li v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
          </li>
        </ul>
      </template>
      <template #not-found></template>
    </ContentList>
</template>

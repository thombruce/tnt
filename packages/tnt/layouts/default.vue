<script setup lang="ts">
const route = useRoute()

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {
  where: [
    { navigation: { $ne: false } },
    { _path: { $contains: route.path } },
    { _dir: route.path.split('/').slice(-1)[0] }
  ]
}
</script>

<template>
  <main class="my-10">
    <Breadcrumbs class="not-prose" />
    <slot />
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
  </main>
</template>

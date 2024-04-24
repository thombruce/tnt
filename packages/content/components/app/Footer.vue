<script setup lang="ts">
const appConfig = useAppConfig()

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/', where: [{ navigation: { $eq: false }, _dir: '' }] }
</script>

<template>
  <footer class="footer footer-center p-10">
    <div>
      <p>{{ appConfig.copyright }}</p>
    </div>

    <div class="hidden">
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
    </div>
  </footer>
</template>

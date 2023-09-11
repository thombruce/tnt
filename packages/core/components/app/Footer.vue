<script setup lang="ts">
const appConfig = useAppConfig()

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/', where: [{ navigation: { $eq: false }, _dir: '' }] }
</script>

<template>
  <footer class="footer footer-center p-10 bg-base-200 text-base-content">
    <div>
      <div v-html="appConfig.footer.icon" class="fill-current"></div>
      <p class="font-bold whitespace-pre">
        {{ appConfig.footer.text }}
      </p>
      <p>{{ appConfig.footer.copyright }}</p>
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

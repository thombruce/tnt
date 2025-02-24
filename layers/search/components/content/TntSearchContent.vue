<script setup lang="ts">
import { useSearchStore } from '@/layers/search/stores/search'
import { storeToRefs } from 'pinia'

// Store
const store = useSearchStore()
// Store: Getters
const { query, results, filtered } = storeToRefs(store)
// Store: Actions
const { search, $reset } = store

// const search = _debounce(async () => {
// const componentSearch = async () => {
//   search()
// }
// }, 250, { 'maxWait': 500 })
</script>

<template lang="pug">
.not-prose
  TntSearch.mb-5(
    id="content-search"
    placeholder="Search..."
    v-model="query"
    :method="search"
  )

  ul(class="divide-y divide-gray-500/50")
    li.py-5(v-for="article in filtered" :key="article.id")
      NuxtLink(:to="article.id")
        strong.text-lg {{ article.navigation?.title || article.title }}
      small(class="block text-gray-500/50") {{ article.id }}
      p {{ article.content }}

  //- pre {{ filtered }}
</template>

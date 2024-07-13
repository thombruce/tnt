<script lang="ts" setup>
const query = ref('')
const results = ref([])

const search = async () => {
  const res = await searchContent(query.value, {})
  results.value = res.value
}
</script>

<template lang="pug">
div
  TntInput(
    placeholder="Search..."
    v-model="query"
    @input="search()"
  )

  ul
    li(v-for="article in results" :key="article.id")
      NuxtLink(:to="article.id") {{ article.navigation?.title || article.title }}
</template>

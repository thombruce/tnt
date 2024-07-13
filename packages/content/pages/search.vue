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
  TntSearch(
    placeholder="Search..."
    v-model="query"
    :method="search"
  )

  //- TODO: It is probably better to use the ID to fetch the content itself for display (which will include nav title if present).
  //-       Drawback? Won't link to subheadings. But... you can always use the id for that.
  //-       Lot of design considerations here.
  ul
    li.mb-5(v-for="article in results" :key="article.id")
      NuxtLink(:to="article.id")
        strong {{ article.navigation?.title || article.title }}
      p {{ article.content }}

  //- pre {{ results }}
</template>

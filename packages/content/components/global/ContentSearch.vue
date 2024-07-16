<script lang="ts" setup>
const query = ref('')
const results = ref([])

const search = async () => {
  const res = await searchContent(query.value, {})

  const filtered = res.value.filter((value) => {
    const titles = value.id.split('#')
    if (titles.length <= 1) return true
    if (titles[0].split('/').pop() !== titles[1]) return true
  }) 

  results.value = filtered
}
</script>

<template lang="pug">
.not-prose
  TntSearch.mb-5(
    id="content-search"
    placeholder="Search..."
    v-model="query"
    :method="search"
  )

  //- TODO: It is probably better to use the ID to fetch the content itself for display (which will include nav title if present).
  //-       Drawback? Won't link to subheadings. But... you can always use the id for that.
  //-       Lot of design considerations here.
  ul(class="divide-y divide-gray-500/50")
    template(v-for="article in results" :key="article.id")
      li.py-5(v-for="article in results" :key="article.id")
        NuxtLink(:to="article.id")
          strong.text-lg {{ article.navigation?.title || article.title }}
        small(class="block text-gray-500/50") {{ article.id }}
        p {{ article.content }}

  //- pre {{ results }}
</template>

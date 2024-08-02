<script setup>
const route = useRoute()

const props = defineProps(['path', 'sort'])

const path = props.path || route.path

const query = {
  where: [
    { navigation: { $ne: false } },
    { _path: {
      $regex: new RegExp(`^${path.replace(/\/$/, "")}/.+`)
    } },
    { _dir: path.split('/').slice(-1)[0] },
    { _partial: false }
  ],
  sort: props.sort
}

const { data: list } = await useAsyncData(
  `tnt-article-list-${path}`,
  () => queryContent(path)
    .where(query.where)
    .sort(query.sort)
    .find()
)
</script>

<template lang="pug">
div
  .not-prose(v-if="list")
    ul(class="divide-y divide-gray-500/50")
      template(v-for="article in list" :key="article._path")
        li.py-5
          NuxtLink(:to="article._path")
            strong.text-lg {{ article.navigation?.title || article.title }}
          Byline(v-if="article.authors" :authors="article.authors")
          p {{ article.description }}
  strong.text-lg(v-else) No articles found.
</template>

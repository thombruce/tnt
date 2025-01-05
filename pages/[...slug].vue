<script setup lang="ts">
const { path } = useRoute()

const { data: list } = await useAsyncData(
  `tnt-catchall-list-${path}`,
  () => queryContent(path).where({
    _path: { $regex: new RegExp(`^${path.replace(/\/$/, "")}/[^/]+$`) }
  }).find()
)

defineOgImageComponent('NuxtSeo',
  {
    // theme: '#ff0000',
    colorMode: 'dark'
  }
)
</script>

<template lang="pug">
main.prose
  ContentDoc
    template(#empty)
    template(#not-found)

  div
    article(v-for="document in list" :key="document._path")
      h2
        NuxtLink(:to="document._path") {{ document.navigation?.title || document.title }}
      p {{ document.description }}
</template>

<script setup lang="ts">
// NOTE: This component duplicated a Core component

const { copyright } = useAppConfig()

const runtimeConfig = useRuntimeConfig()

const query = { path: '/', where: { navigation: { $eq: false }, _dir: '' } }

const { data: list } = await useAsyncData(
  `tnt-footer-hidden`,
  () => queryContent(query.path)
    .where(query.where)
    .find()
)
</script>

<template lang="pug">
footer
  AppFooterContent
  .tnt-copyright
    small {{ copyright }}
  .hidden(v-if="list")
    ul
      li(v-for="article in list" :key="article._path")
        NuxtLink(:to="article._path") {{ article.title }}
</template>

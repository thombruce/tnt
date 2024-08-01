<script setup>
const { copyright } = useAppConfig()

const runtimeConfig = useRuntimeConfig()

const query = { path: '/', where: [{ navigation: { $eq: false }, _dir: '' }] }
</script>

<template lang="pug">
footer
  AppFooterContent
  .tnt-copyright
    small {{ copyright }}
  .hidden(v-if="runtimeConfig?.public?.content")
    ContentList(:query="query")
      template(#default="{ list }")
        ul
          li(v-for="article in list" :key="article._path")
            NuxtLink(:to="article._path") {{ article.title }}
      template(#not-found)
</template>

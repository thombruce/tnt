<script setup>
// TODO: TypeScript lang="ts" skipped as we're invoking methods below that aren't necessarily defined.
//       We could resolve this by duplicating this component on TNT Content where they are
//       defined.

const { copyright } = useAppConfig()

const runtimeConfig = useRuntimeConfig()

const query = { path: '/', where: [{ navigation: { $eq: false }, _dir: '' }] }

const { data: list } = runtimeConfig.public?.content
  ? await useAsyncData(
    `tnt-footer-hidden`,
    () => queryContent(query.path)
      .where(query.where)
      .find()
  )
  : []
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

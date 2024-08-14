<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(`tnt-redirect-${route.path}`, () => queryContent(route.path).findOne())

useHead({
  title: `Redirecting to ${page.value.title}...`,
  meta: [{ "http-equiv": "refresh", content: `0; URL=${page.value.link}` }],
  link: [{ rel: "canonical", href: page.value.link }]
})
</script>

<template lang="pug">
div
  h1 Redirecting to {{ page.title }}...
  p
    | If you are not redirected automatically, click here:
    |
    NuxtLink(:to="page.link") {{ page.link }}
</template>

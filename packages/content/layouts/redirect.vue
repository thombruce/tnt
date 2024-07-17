<script setup>
const { page } = useContent()

useHead({
  title: `Redirecting to ${page.value.title}...`,
  meta: [{ "http-equiv": "refresh", content: `0; URL=${page.value.link}` }],
  link: [{ rel: "canonical", href: page.value.link }]
})
</script>

<template lang="pug">
.prose
  h1 Redirecting to {{ page.title }}...
  p
    | If you are not redirected automatically, click here:
    |
    NuxtLink(:to="page.link") {{ page.link }}
</template>

<script setup>
const { name } = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${name}` : name
  }
})
</script>

<template lang="pug">
.tnt-container
  AppHeader

  main
    NuxtPage(:page-key="route => route.fullPath")

  AppFooter
</template>

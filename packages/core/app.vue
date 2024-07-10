<script setup>
const { name } = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${name}` : name
  }
})
</script>

<template lang="pug">
.max-w-4xl.mx-auto.my-4
  AppHeader

  main
    NuxtPage

  AppFooter
</template>

<script setup>
const { name } = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${name}` : name
  }
})
</script>

<template lang="pug">
.flex.flex-col
  AppNavbar

  main.my-10.mx-auto
    NuxtPage

  AppFooter
</template>

<script setup>
const { name, gradient } = useAppConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${name}` : name
  },
  bodyAttrs: {
    class: gradient ? 'bg-gradient-auto' : '',
  },
})
</script>

<template lang="pug">
.tnt-container
  AppHeader

  main
    NuxtPage(:page-key="route => route.fullPath")

  AppFooter

  ToastStack
</template>

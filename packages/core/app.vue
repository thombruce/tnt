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
div
  AppHeader

  main
    .tnt-container
      NuxtPage(:page-key="route => route.fullPath")

  AppFooter

  ToastStack
</template>

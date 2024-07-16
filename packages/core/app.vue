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

<style lang="postcss">
body {
  @apply bg-white text-black dark:bg-black dark:text-white;
}

div.tnt-container {
  @apply max-w-4xl mx-auto my-4;
}

.prose {
  @apply dark:prose-invert;
}
</style>

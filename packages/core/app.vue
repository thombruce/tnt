<script setup>
const { name, gradient } = useAppConfig()

// Set colorMode if config file is present
const colorMode = useColorMode()
const config = await useTntApi().loadConfig()
if (config.colorMode) colorMode.preference = config.colorMode

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

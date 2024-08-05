<script setup>
const { name, gradient } = useAppConfig()

// Set colorMode if config file is present
const colorMode = useColorMode()
const config = await useTntApi().loadConfig()
if (config.colorMode) colorMode.preference = config.colorMode

// NOTE: Alternative pattern; data is returned via IPC send
// if (isElectron()) {
//   window.api.on('return-config', (_, data) => {
//     colorMode.preference = data.colorMode
//   })
// }

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

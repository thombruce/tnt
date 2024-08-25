<script setup>
const { name, gradient } = useAppConfig()

// Set colorMode if config file is present
const colorMode = useColorMode()
const config = await useTntApi().loadConfig()
if (config.colorMode) colorMode.preference = config.colorMode

const bodyClass = computed(() => {
  let klasses = []
  if (isElectron()) klasses.push('electron')
  if (gradient) klasses.push('bg-gradient-auto')
  return klasses.join(' ')
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${name}` : name
  },
  bodyAttrs: {
    class: bodyClass.value,
  },
})
</script>

<template lang="pug">
div
  NuxtPage(:page-key="route => route.fullPath")

  ToastStack
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const { name, gradient } = useAppConfig()

const route = useRoute()

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

const sidebar = useSidebar()
watch(() => route.path, () => {
  if (breakpoints.smallerOrEqual('md').value) sidebar.value = false
})
</script>

<template lang="pug">
div
  NuxtPage(:page-key="route => route.fullPath")

  ToastStack
</template>

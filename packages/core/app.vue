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

const sidebar = useSidebar()

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
.flex
  div(
    class="w-80 transition-all duration-300"
    :class="sidebar ? 'ml-0' : '-ml-80'"
  )
    AppSidebar

  .flex-1
    AppHeader

    main
      .tnt-container
        NuxtPage(:page-key="route => route.fullPath")

    AppFooter

  ToastStack
</template>

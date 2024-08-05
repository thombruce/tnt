<script setup>
const { layout } = useAppConfig()
const colorMode = useColorMode()

watch(colorMode, async () => {
  useTntApi().updateConfig({ colorMode: colorMode.preference })
})
</script>

<template lang="pug">
NuxtLayout(:name="layout || 'default'")
  .prose
    TntForm
      h3.font-bold.text-lg Settings

      ClientOnly
        TntRadio(v-model="colorMode.preference" label="Dark mode" :options="['system', 'light', 'dark']")
</template>

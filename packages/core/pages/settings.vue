<script setup lang="ts">
const { layout } = useAppConfig()
const colorMode = useColorMode()

watch(colorMode, async () => {
  useTntApi().updateConfig({ colorMode: colorMode.preference })
})
</script>

<template lang="pug">
NuxtLayout(:name="layout || 'default'")
  TntForm
    h1 Settings

    h2 Display

    ClientOnly
      TntRadio(v-model="colorMode.preference" label="Dark mode" :options="['system', 'light', 'dark']")
</template>

<script setup>
const { layout } = useAppConfig()
const colorMode = useColorMode()

// TODO: Change in config must update config file
//       when running in Electron
</script>

<template lang="pug">
NuxtLayout(:name="layout || 'default'")
  .prose
    TntForm
      h3.font-bold.text-lg Settings

      ClientOnly
        TntRadio(v-model="colorMode.preference" label="Dark mode" :options="['system', 'light', 'dark']")
</template>

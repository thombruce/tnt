<script setup>
const colorMode = useColorMode()
</script>

<template lang="pug">
NuxtLayout
  .prose
    TntForm
      h3.font-bold.text-lg Settings

      ClientOnly
        TntSelect(v-model="colorMode.preference" label="Dark mode" :options="['system', 'light', 'dark']")
</template>

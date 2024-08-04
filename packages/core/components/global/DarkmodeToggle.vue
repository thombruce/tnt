<script setup>
const colorMode = useColorMode()

// TODO: Change in config must update config file
//       when running in Electron
</script>

<template lang="pug">
TntButton.btn-none(@click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'")
  Icon(:name="colorMode.value === 'dark' ? 'fa:sun-o' : 'fa:moon-o'")
</template>

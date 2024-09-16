<script setup lang="ts">
const colorMode = useColorMode()

const toggleDarkmode = function() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'

  useTntApi().updateConfig({ colorMode: colorMode.preference })
}
</script>

<template lang="pug">
TntButton.btn-none(@click="toggleDarkmode()")
  Icon(:name="colorMode.value === 'dark' ? 'fa6-solid:sun' : 'fa6-solid:moon'")
</template>

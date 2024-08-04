<script setup>
const colorMode = useColorMode()

const toggleDarkmode = function() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'

  if (isElectron()) {
    window.tnt.send('update-config', { colorMode: colorMode.preference })
  }
}
</script>

<template lang="pug">
TntButton.btn-none(@click="toggleDarkmode()")
  Icon(:name="colorMode.value === 'dark' ? 'fa:sun-o' : 'fa:moon-o'")
</template>

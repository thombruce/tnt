<script setup>
const colorMode = useColorMode()
</script>

<template lang="pug">
TntButton.btn-none(@click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'")
  Icon(:name="colorMode.value === 'dark' ? 'fa:sun-o' : 'fa:moon-o'")
</template>

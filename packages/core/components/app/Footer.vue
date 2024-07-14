<script setup>
const { copyright } = useAppConfig()
</script>

<template lang="pug">
footer.mt-4.text-center
  AppFooterContent
  small.block {{ copyright }}
  AppFooterHidden
</template>

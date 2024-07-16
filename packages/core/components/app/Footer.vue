<script setup>
const { copyright } = useAppConfig()
</script>

<template lang="pug">
footer
  AppFooterContent
  .tnt-copyright
    small {{ copyright }}
  //- TNT Content: Hidden Content Links
</template>

<style lang="postcss" scoped>
footer {
  @apply mt-4 text-center;
}
</style>

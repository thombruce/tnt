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

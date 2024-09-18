<script setup lang="ts">
// NOTE: This component is duplicated on TNT Content

const { copyright } = useAppConfig()
</script>

<template lang="pug">
footer
  AppFooterContent
  .tnt-copyright
    small {{ copyright }}
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>

<template lang="pug">
div
  //- TODO: Maybe prefer to gracefully enhance content components
  //-       based on runtimeConfig, rather than duplicating or
  //-       overwriting them like this.
  TntContentHeader(v-if="runtimeConfig?.public?.content")/
  TntHeader(v-else)/
  UContainer
    slot/
  TntFooter/
</template>
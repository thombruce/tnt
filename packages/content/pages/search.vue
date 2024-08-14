<script lang="ts" setup>
const { layout } = useAppConfig()
</script>

<template lang="pug">
.prose
  NuxtLayout(:name="layout || 'default'")
    ContentSearch
</template>

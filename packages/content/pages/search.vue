<script lang="ts" setup>
const { layout } = useAppConfig()
</script>

<template lang="pug">
NuxtLayout(:name="layout || 'default'")
  ContentSearch
</template>

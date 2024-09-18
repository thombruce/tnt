<script setup lang="ts">
// NOTE: This component is duplicated on TNT Content

const props = defineProps([
  'crumb'
])
</script>

<template lang="pug">
NuxtLink(v-else :to="crumb.path")
  | {{ _startCase(crumb.param) }}
</template>

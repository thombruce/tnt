<script setup lang="ts">
// NOTE: This component is duplicated on TNT Content

const props = defineProps([
  'crumb'
])
</script>

<template lang="pug">
NuxtLink(:to="crumb.path")
  | {{ _startCase(crumb.param) }}
</template>

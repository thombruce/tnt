<script setup lang="ts">
const { attachments } = defineProps<{
  attachments: string[],
}>()
</script>

<template lang="pug">
TntGallery(v-if="attachments" :images="attachments.map(a => Object.create({ _path: a.split('.')[0], _file: a }))")/
</template>

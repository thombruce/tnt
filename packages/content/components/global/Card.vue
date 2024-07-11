<script setup>
defineProps(['image'])
</script>

<template lang="pug">
.flex-1
  figure(v-if="image")
    img(:src="image")
  .not-prose
    ContentSlot(:use="$slots.default")
</template>

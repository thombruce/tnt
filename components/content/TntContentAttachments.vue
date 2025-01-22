<script setup lang="ts">
const props = defineProps([
  'attachments',
])

const arr = [props.attachments].flat()
</script>

<template lang="pug">
.not-prose.flex.flex-row
  NuxtLink.block.aspect-square(v-for="attachment in arr" :to="attachment.split('.')[0]")
    NuxtImg.w-full.h-full.object-cover(:src="attachment" fit="cover" width="600" height="600")
</template>

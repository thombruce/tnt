<script setup lang="ts">
const props = defineProps([
  'attachments',
])

const arr = [props.attachments].flat()
</script>

<template lang="pug">
.not-prose.flex.flex-row
  a.block.aspect-square(v-for="attachment in arr" :href="attachment")
    NuxtImg.w-full.h-full.object-cover(:src="attachment" fit="cover" width="600" height="600")
</template>

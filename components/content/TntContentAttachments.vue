<script setup lang="ts">
const props = defineProps([
  'attachments',
])

const arr = [props.attachments].flat()
</script>

<template lang="pug">
.flex.flex-row
  div(v-for="attachment in arr")
    a(:href="attachment")
      NuxtImg(:src="attachment" fit="cover" width="600" height="600")
</template>

<script setup lang="ts">
// TODO: This is working in a content page as of now.
//       It may not when rendered statically...?
//       Investigate and... probably move to a
//       components/global/ dir if that's the case.
const { type = 'digital' } = defineProps<{
  type?: 'digital' | 'analog'
}>()

const time = ref((new Date))

useIntervalFn(() => time.value = new Date)
</script>

<template lang="pug">
p {{ time.toLocaleTimeString() }}
</template>

<script setup>
const props = defineProps({
  value: {
    type: [String, Number],
    default: 0
  },
  max: {
    type: [String, Number],
    default: 100
  }
})

const percent = computed(() => {
  return props.value / props.max * 100
})
</script>

<template lang="pug">
.progress
  span.progress-bg
  span.progress-fg(:style="'width:'+percent+'%;'")
</template>

<style lang="postcss" scoped>
.progress {
  @apply relative w-full h-2.5;
}

.progress > span {
  @apply
    block
    absolute
    w-full
    rounded-full
    h-2.5;
}
.progress > span.progress-bg {
  @apply
    bg-gray-200
    dark:bg-gray-800;
}
.progress > span.progress-fg {
  @apply
    bg-emerald-500
    transition-[width]
    ease-in-out
    duration-500;
}
</style>

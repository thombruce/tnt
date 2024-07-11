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
.relative.w-full(class="h-2.5")
  span.progress.progress-bg
    span.sr-only {{ $t("conditions.open") }}
  span.progress.progress-fg(:style="'width:'+percent+'%;'")
    span.sr-only {{ $t("conditions.closed") }}
</template>

<style lang="postcss">
.progress {
  @apply
    block
    absolute
    w-full
    rounded-full
    h-2.5;
}
.progress.progress-bg {
  @apply
    bg-gray-200
    dark:bg-gray-800;
}
.progress.progress-fg {
  @apply
    bg-emerald-500
    transition-[width]
    ease-in-out
    duration-500;
}
</style>

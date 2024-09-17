<script setup lang="ts">
defineProps(['url'])
</script>

<template lang="pug">
.tnt-mockup
  .tnt-address-bar.flex.justify-between
    span.flex-0
      Icon.mr-3(name="fa6-solid:earth-americas")
      Icon.mr-3(name="fa6-solid:bookmark")
    span.flex-1.rounded.bg-white.text-black.px-2.py-1(class="dark:bg-black dark:text-white")
        | {{ url }}
    span.flex-0
      Icon.ml-3(name="fa6-solid:magnifying-glass")
  .tnt-content-window
    slot
</template>

<style lang="postcss" scoped>
.tnt-mockup {
  @apply
    rounded
    overflow-hidden
    border
    border-base-300
    dark:border-base-700;
}

.tnt-mockup > .tnt-address-bar {
  @apply
    px-2
    py-2
    border
    border-base-300
    dark:border-base-700
    bg-base-200
    dark:bg-base-800;
}

.tnt-mockup > .tnt-content-window {
  @apply
    p-4
    border-t
    border-base-300
    dark:border-base-700
    bg-base-100
    dark:bg-base-900;
}
</style>

<script setup>
defineProps(['url'])
</script>

<template lang="pug">
.tnt-mockup
  .tnt-address-bar {{ url }}
  .tnt-content-window
    slot
</template>

<style lang="postcss" scoped>
.tnt-mockup {
  @apply
    border
    border-base-300
    dark:border-base-700;
}

.tnt-mockup > .tnt-address-bar {
  @apply
    border
    border-base-300
    dark:border-base-700
    bg-base-200
    dark:bg-base-800;
}

.tnt-mockup > .tnt-content-window {
  @apply
    flex
    justify-center
    px-4
    py-16
    border-t
    border-base-300
    dark:border-base-700
    bg-base-100
    dark:bg-base-900;
}
</style>
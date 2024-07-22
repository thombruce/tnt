<script setup>
defineProps(['image'])
</script>

<template lang="pug">
.tnt-card.not-prose
  figure(v-if="image")
    img(:src="image")
  .flex
    .card-body.flex-1
      slot
    .card-actions.p-2.space-x-4
      slot(name="actions")
</template>

<style lang="postcss" scoped>
.tnt-card {
  @apply
    w-full
    rounded
    overflow-hidden
    border-2
    bg-white
    dark:bg-black
    border-base-200
    dark:border-base-900;
  > div {
    @apply px-3 py-2;
  }
  &.neutral {
    @apply
      bg-neutral-200
      dark:bg-neutral-800
      text-neutral-950
      dark:text-neutral-100
      border-neutral-700
      dark:border-neutral-900;
  }
  &.primary {
    @apply
      bg-primary-200
      dark:bg-primary-700
      text-primary-950
      dark:text-primary-100
      border-primary-700
      dark:border-primary-900;
  }
  &.success {
    @apply
      bg-success-200
      dark:bg-success-dark
      text-success-950
      dark:text-success-100
      border-success-700
      dark:border-success-900;
  }
  &.warning {
    @apply
      bg-warning-200
      dark:bg-warning-dark
      text-warning-950
      dark:text-warning-100
      border-dotted
      border-warning-700
      dark:border-warning-900;
  }
  &.danger, &.error {
    @apply
      bg-danger-200
      dark:bg-danger-dark
      text-danger-950
      dark:text-danger-100
      border-dashed
      border-danger-700
      dark:border-danger-900;
  }
}
</style>

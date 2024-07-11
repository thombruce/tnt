<script setup>
defineProps(['url'])
</script>

<template lang="pug">
.border.border-base-300
  div
    .input.border.border-base-300 {{ url }}
  .flex.justify-center.px-4.py-16.border-t.border-base-300.bg-base-200
    slot
</template>

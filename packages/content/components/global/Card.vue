<script setup>
defineProps(['image'])
</script>

<template>
<div class="card flex-1">
  <figure v-if="image"><img :src="image" /></figure>
  <div class="card-body not-prose">
    <ContentSlot :use="$slots.default" />
  </div>
</div>
</template>

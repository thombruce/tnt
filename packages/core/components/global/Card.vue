<script setup>
defineProps(['image'])
</script>

<template>
<div class="card flex-1">
  <figure v-if="image"><img :src="image" /></figure>
  <div class="card-body not-prose">
    <slot />
  </div>
</div>
</template>

<style lang="postcss">
.card-body h1:first-child, .card-body h2:first-child, .card-body h3:first-child {
  @apply card-title;
}

.card-body p a {
  @apply link;
}
</style>

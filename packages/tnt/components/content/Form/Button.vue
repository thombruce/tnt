<script setup>
defineProps([
  'type',
  'label',
])
</script>

<template>
  <div class="mt-5">
    <button :type="type" class="btn btn-primary">{{ label }}</button>
  </div>
</template>

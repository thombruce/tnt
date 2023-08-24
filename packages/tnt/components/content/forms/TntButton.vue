<script setup>
defineProps({
  type: {
    type: String,
    default: 'submit'
  },
  label: {
    type: String,
    default: 'Submit'
  }
})
</script>

<template>
  <button :type="type" class="btn btn-primary">{{ label }}</button>
</template>

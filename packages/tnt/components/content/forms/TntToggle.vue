<script setup>
defineProps({
  name: {
    type: String,
  },
  label: {
    type: String,
  },
  checked: {
    type: [Boolean, String],
  },
  options: {
    type: Array,
  }
})
</script>

<template>
  <TntCheckbox v-bind="$props" klass="toggle" />
</template>

<!-- TODO: Multi binding -->

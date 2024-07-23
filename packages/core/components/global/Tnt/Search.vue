<script setup>
const props = defineProps({
  method: {
    type: Function,
    required: true,
  },
})
</script>

<template lang="pug">
TntInput(
  v-bind="$props"
  @input="method()"
  type="search"
)
</template>

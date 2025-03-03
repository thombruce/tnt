<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  label: {
    type: String,
    default: (props: any) => _startCase(props.type)
  }
})
</script>

<template lang="pug">
button(:type="type")
  slot {{ label }}
</template>

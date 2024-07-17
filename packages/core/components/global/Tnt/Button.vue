<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'submit'
  },
  label: {
    type: String,
    default: (props) => _startCase(props.type)
  }
})
</script>

<template lang="pug">
button(:type="type") {{ label }}
</template>

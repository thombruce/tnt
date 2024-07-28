<script setup>
// TODO: Rework button to be of button type by default and accept label param
//       Create new TntSubmit component intended for forms with the submit defaults
const props = defineProps({
  type: {
    type: String,
    default: 'button'
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

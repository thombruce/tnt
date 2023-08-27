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

<template>
  <button :type="type" class="btn btn-primary">{{ label }}</button>
</template>

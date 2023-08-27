<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'toggle')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'toggle')
  }
})
</script>

<template>
  <TntCheckbox
    v-bind="$props"
    klass="toggle"
  />
</template>

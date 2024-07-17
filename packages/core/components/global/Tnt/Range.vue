<script setup>
const props = defineProps({
  modelValue: {
    default: []
  },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'range')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'range')
  },
  hint: {},
  min: {
    default: 0
  },
  max: {
    default: 100
  },
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div
  label(v-if="label" :for="id")
    span.font-bold(v-if="label" v-html="label")
  input(
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="id"
    :name="name"
    type="range"
    :min="min"
    :max="max"
  )
  label(v-if="hint" :for="id")
    span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

<style lang="postcss" scoped>
input {
  @apply
    block
    w-full
    py-2
    accent-primary
    hover:accent-primary-hover
    active:accent-primary-hover
    dark:accent-primary-dark
    dark:hover:accent-primary-dark-hover
    dark:active:accent-primary-dark-hover;
}

/*
Pseudo-states for range input:
  hover:
  focus:
  active:
*/
</style>

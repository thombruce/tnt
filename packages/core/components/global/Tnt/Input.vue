<script setup>
const props = defineProps({
  modelValue: {
    default: ''
  },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'input')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'input')
  },
  type: {
    type: String,
    default: 'text'
  },
  labelAlt: {},
  hint: {},
  hintAlt: {},
  placeholder: {},
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div
  label(v-if="label || labelAlt" :for="id")
    span(v-if="label" v-html="label")
    span(v-if="labelAlt" v-html="labelAlt")
  input(
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="id"
    :name="name"
    :type="type"
    :placeholder="placeholder"
  )
  label(v-if="hint || hintAlt" :for="id")
    span(v-if="hint" v-html="hint")
    span(v-if="hintAlt" v-html="hintAlt")
</template>

<style lang="postcss" scoped>
input {
  @apply
    py-2
    px-3
    rounded
    border
    bg-white
    text-gray-700
    border-gray-200
    dark:bg-gray-900
    dark:text-gray-300
    dark:border-gray-700;
}
</style>
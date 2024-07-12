<script setup>
const props = defineProps({
  modelValue: {
    default: ''
  },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'textarea')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'textarea')
  },
  hint: {},
  placeholder: {},
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div
  label(v-if="label" :for="id")
    span.font-bold(v-if="label" v-html="label")
  textarea(
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="id"
    :name="name"
    class="h-24"
    :placeholder="placeholder"
  )
  label(v-if="hint" :for="id")
    span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

<style lang="postcss" scoped>
textarea {
  @apply
    block
    w-full
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

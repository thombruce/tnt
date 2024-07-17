<script setup>
// TODO: Separate this component into Checkbox.vue and CheckboxGroup.vue
//       Also rename Radio.vue to RadioGroup.vue for consistency
//       What to do about the differing @change actions? Figure it out.
const props = defineProps({
  modelValue: {
    default: []
  },
  label: {
    type: String,
  },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'checkbox')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'checkbox')
  },
  hint: {},
  checked: {
    type: [Boolean, String],
  },
  disabled: {
    type: [Boolean, String],
  },
  options: {
    type: Array,
  },
  klass: {
    type: String,
    default: 'checkbox'
  },
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div
  fieldset(v-if="options")
    legend(v-if="label")
      span.font-bold(v-if="label" v-html="label")
    div(v-for="option in options")
      input.mr-3(
        :id="`${id}-${_camelCase(option)}`"
        :checked="modelValue == (option.value || option)"
        :disabled="option.disabled"
        @change="$emit('update:modelValue', _xor(modelValue, [$event.target.value]))"
        :value="option.value || option"
        type="checkbox"
        :name="name"
      )
      label(:for="`${id}-${_camelCase(option)}`")
        span {{ option.label || option }}
    label(v-if="hint" :for="id")
      span.text-xs.text-gray-500(v-if="hint" v-html="hint")
  div(v-else)
    input.mr-3(
      :id="id"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
      :name="name"
      type="checkbox"
    )
    label(:for="id")
      span.font-bold {{ label }}
</template>

<style lang="postcss" scoped>
input {
  @apply
    rounded
    checked:bg-primary
    checked:focus:bg-primary-hover
    checked:hover:bg-primary-hover
    dark:checked:bg-primary-dark
    dark:checked:focus:bg-primary-dark-hover
    dark:checked:hover:bg-primary-dark-hover;
}
</style>

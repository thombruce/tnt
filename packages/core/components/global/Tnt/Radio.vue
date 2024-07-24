<script setup>
// TODO: Rename Radio.vue to RadioGroup.vue for consistency with Checkbox and CheckboxGroup
//       Also remove v-else for singular Radio buttons (I can't think of a situation this would be valid)
const props = defineProps({
  modelValue: {
    default: ''
  },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'radio')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'radio')
  },
  hint: {},
  options: {},
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div
  fieldset
    legend(v-if="label")
      span.font-bold(v-if="label" v-html="label")
    div(v-for="option in options")
      input.mr-3(
        :id="`${id}-${_camelCase(option)}`"
        :checked="modelValue == (option.value || option)"
        @change="$emit('update:modelValue', $event.target.value)"
        :value="option.value || option"
        type="radio"
        :name="name"
      )
      label(:for="`${id}-${_camelCase(option)}`")
        span {{ option.label || option }}
    label(v-if="hint" :for="id")
      span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

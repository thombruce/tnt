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
  fullErrors: {
    type: Boolean
  },
  rules: {
    type: Object,
  }
})

const computedRules = computed(() => {
  return useValidations(props.rules?.format || props.type || 'radio', props.rules, props.label)
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div(:class="fullErrors ? 'full-errors' : undefined")
  VeeField(
    v-bind="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    :name="name"
    :rules="computedRules"
    v-slot="{ field, errors }"
  )
    label(v-if="label" :for="id")
      span.font-bold(v-if="label" v-html="label")

    div(v-for="option in options")
      input.mr-3(
        v-bind="field"
        :id="`${id}-${_camelCase(option)}`"
        :checked="modelValue == (option.value || option)"
        :value="option.value || option"
        type="radio"
        :name="name"
        :class="errors[0] ? 'error' : ''"
      )
      label(:for="`${id}-${_camelCase(option)}`")
        span {{ option.label || option }}

    .errors.full
      ul(class="text-error marker:text-error-500 dark:text-error-dark marker:dark:text-error-900")
        li(v-for="error in errors") {{ error }}
    .errors.single(class="text-error dark:text-error-dark") {{ errors[0] }}

    label(v-if="hint" :for="id")
      span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

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
    default: (props) => props.label ? _camelCase(props.label) : `range-${_uniqueId()}`
  },
  hint: {},
  min: {
    default: 0
  },
  max: {
    default: 100
  },
  fullErrors: {
    type: Boolean
  },
  rules: {
    type: Object,
  }
})

const computedRules = computed(() => {
  return useValidations(props.rules?.format || 'range', props.rules, props.label)
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div(:class="fullErrors ? 'full-errors' : undefined")
  VeeField(
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :name="name"
    :rules="computedRules"
    v-slot="{ field, errors }"
  )
    label(v-if="label" :for="id")
      span.font-bold(v-if="label" v-html="label")

    input(
      v-bind="field"
      :id="id"
      type="range"
      :min="min"
      :max="max"
      :class="errors[0] ? 'error' : ''"
    )

    .errors.full
      ul(class="text-error marker:text-error-500 dark:text-error-dark marker:dark:text-error-900")
        li(v-for="error in errors") {{ error }}
    .errors.single(class="text-error dark:text-error-dark") {{ errors[0] }}

    label(v-if="hint" :for="id")
      span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

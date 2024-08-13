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
    default: (props) => props.label ? _camelCase(props.label) : `textarea-${_uniqueId()}`
  },
  hint: {},
  placeholder: {},
  fullErrors: {
    type: Boolean
  },
  rules: {
    type: Object,
  }
})

const computedRules = computed(() => {
  return useValidations(props.rules?.format || 'textarea', props.rules, props.label)
})

const { value, errors } = useField(() => props.name, computedRules.value, { syncVModel: true })
</script>

<template lang="pug">
div(:class="fullErrors ? 'full-errors' : undefined")
  label(v-if="label" :for="id")
    span.font-bold(v-if="label" v-html="label")

  textarea(
    v-model="value"
    :id="id"
    :name="name"
    class="h-24"
    :placeholder="placeholder"
    :class="errors[0] ? 'error' : ''"
  )

  .errors.full
    ul(class="text-error marker:text-error-500 dark:text-error-dark marker:dark:text-error-900")
      li(v-for="error in errors") {{ error }}
  .errors.single(class="text-error dark:text-error-dark") {{ errors[0] }}

  label(v-if="hint" :for="id")
    span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

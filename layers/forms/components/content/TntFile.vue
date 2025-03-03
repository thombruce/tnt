<script setup lang="ts">
const props = defineProps({
  modelValue: {
    default: ''
  },
  label: { type: String },
  id: {
    type: String,
    default: (props: any) => `${_camelCase(props.label || 'file')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props: any) => props.label ? _camelCase(props.label) : `file-${_uniqueId()}`
  },
  hint: {},
  fullErrors: {
    type: Boolean
  },
  rules: {
    type: Object,
  }
})

const computedRules = computed(() => {
  return useValidations(props.rules?.format || 'file', props.rules, props.label)
})

const { value, errors, handleChange, handleBlur } = useField(() => props.name, computedRules.value, { syncVModel: true })
</script>

<template lang="pug">
div(:class="fullErrors ? 'full-errors' : undefined")
  label(v-if="label" :for="id")
    span.font-bold(v-if="label" v-html="label")

  input(
    @change="handleChange"
    @blur="handleBlur"
    :id="id"
    :name="name"
    type="file"
    :class="errors[0] ? 'error' : ''"
  )

  .errors.full
    ul(class="text-error marker:text-error-500 dark:text-error-dark marker:dark:text-error-900")
      li(v-for="error in errors") {{ error }}
  .errors.single(class="text-error dark:text-error-dark") {{ errors[0] }}

  label(v-if="hint" :for="id")
    span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

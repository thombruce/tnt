<script setup>
import * as yup from 'yup'

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
  hint: {},
  placeholder: {},
  fullErrors: {},
  validate: {},
  rules: {
    type: Object,
    default: (props) => {
      switch(props.validate?.format || props.type) {
        case 'text':
        case 'string':
        case 'password':
          return yup.string()
            .min(props.validate?.min || 0)
            .max(props.validate?.max || Number.MAX_SAFE_INTEGER)
            // TODO: Case insensitivity should be configurable
            .matches(props.validate?.match ? new RegExp(props.validate.match, 'i') : /.*/)
            .label(props.label)
        case 'email':
          return yup.string()
            .email()
            .min(props.validate?.min || 0)
            .max(props.validate?.max || Number.MAX_SAFE_INTEGER)
            // TODO: Case insensitivity should be configurable
            .matches(props.validate?.match ? new RegExp(props.validate.match, 'i') : /.*/)
            .label(props.label)
        case 'url':
          return yup.string()
            .url()
            .min(props.validate?.min || 0)
            .max(props.validate?.max || Number.MAX_SAFE_INTEGER)
            // TODO: Case insensitivity should be configurable
            .matches(props.validate?.match ? new RegExp(props.validate.match, 'i') : /.*/)
            .label(props.label)
        default:
          return yup.mixed()
            .label(props.label)
      }
    }
  }
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div
  VeeField(
    v-bind="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :name="name"
    :rules="rules"
    v-slot="{ field, errors }"
  )
    label(v-if="label" :for="id")
      span.font-bold(v-if="label" v-html="label")

    input(
      v-bind="field"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :class="errors[0] ? 'error' : ''"
    )

    ul(v-if="fullErrors" class="text-error marker:text-error-500 dark:text-error-dark marker:dark:text-error-900")
      li(v-for="error in errors") {{ error }}
    div(v-else class="text-error dark:text-error-dark") {{ errors[0] }}

    label(v-if="hint" :for="id")
      span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

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
})

const rules = yup.string().label(props.label).min(3).max(12).email()

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

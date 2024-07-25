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
  hint: {},
  placeholder: {},
  fullErrors: {
    type: Boolean
  },
  validate: {},
  rules: {
    type: Object,
    default: (props) => {
      let yupRules

      yupRules = yupAuto(props.validate?.format || props.type)

      // NOTE: String(props.validate[method]) !== 'true'
      //       This will have unintended consequences if, for instance, the user
      //       wants to invoke the literal string 'true' for, say, a matches regex.
      // TODO: Is there a better way?
      Object.keys(props.validate || {}).forEach(method => yupRules = yupRules[method](String(props.validate[method]) !== 'true' ? props.validate[method] : undefined))
      return yupRules.label(props.label)
    }
  }
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div(:class="fullErrors ? 'full-errors' : undefined")
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

    .errors.full
      ul(class="text-error marker:text-error-500 dark:text-error-dark marker:dark:text-error-900")
        li(v-for="error in errors") {{ error }}
    .errors.single(class="text-error dark:text-error-dark") {{ errors[0] }}

    label(v-if="hint" :for="id")
      span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

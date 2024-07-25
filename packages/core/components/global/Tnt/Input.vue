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
  rules: {
    type: Object,
  }
})

const computedRules = computed(() => {
  if (props.rules?.spec) return props.rules

  let yupRules

  yupRules = yupAuto(props.rules?.format || props.type)

  // NOTE: String(props.rules[method]) !== 'true'
  //       This will have unintended consequences if, for instance, the user
  //       wants to invoke the literal string 'true' for, say, a matches regex.
  // TODO: Is there a better way?
  Object.entries(props.rules || {}).forEach(([method, arg]) => yupRules = yupRules[method](String(arg) !== 'true' ? arg : undefined))
  return yupRules.label(props.label)
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
    :rules="computedRules"
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

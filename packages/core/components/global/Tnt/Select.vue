<script setup>
const props = defineProps({
  modelValue: {
    default: ''
  },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'select')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'select')
  },
  hint: {},
  placeholder: {},
  options: {}, // array of strings or { value, text } objects
  fullErrors: {
    type: Boolean
  },
  rules: {
    type: Object,
  }
})

const computedRules = computed(() => {
  return useValidations(props.rules?.format || 'select', props.rules, props.label)
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div(:class="fullErrors ? 'full-errors' : undefined")
  //- @input changed to @change
  VeeField(
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    :name="name"
    :rules="computedRules"
    v-slot="{ field, value, errors }"
  )
    label(v-if="label" :for="id")
      span.font-bold(v-if="label" v-html="label")

    select(
      v-bind="field"
      :id="id"
      :class="errors[0] ? 'error' : ''"
    )
      option(v-if="placeholder" disabled :selected="!value?.length") {{ placeholder }}
      option(
        v-for="option in options"
        :key="option"
        :value="option.value || option.text || option"
        :selected="value?.length && value.includes(option.value || option.text || option)"
      ) {{ option.text || option.value || option }}

    .errors.full
      ul(class="text-error marker:text-error-500 dark:text-error-dark marker:dark:text-error-900")
        li(v-for="error in errors") {{ error }}
    .errors.single(class="text-error dark:text-error-dark") {{ errors[0] }}

    label(v-if="hint" :for="id")
      span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

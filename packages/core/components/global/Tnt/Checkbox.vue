<script setup>
// TODO: Separate this component into Checkbox.vue and CheckboxGroup.vue
//       Also rename Radio.vue to RadioGroup.vue for consistency
//       What to do about the differing @change actions? Figure it out.
const props = defineProps({
  modelValue: {
    default: []
  },
  label: {
    type: String,
  },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'checkbox')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'checkbox')
  },
  hint: {},
  checked: {
    type: [Boolean, String],
  },
  disabled: {
    type: [Boolean, String],
  },
  options: {
    type: Array,
  },
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
    :value="modelValue"
    @change="options ? $emit('update:modelValue', _xor(modelValue, [$event.target.value])) : $emit('update:modelValue', $event.target.value)"
    :name="name"
    :rules="computedRules"
    v-slot="{ field, value, errors }"
  )
    fieldset(v-if="options")
      label(v-if="label" :for="id")
        span.font-bold(v-if="label" v-html="label")

      div(v-for="option in options")
        input.mr-3(
          v-bind="field"
          :id="`${id}-${_camelCase(option)}`"
          :checked="values?.length && values.includes(option.value || option)"
          :value="option.value || option"
          type="checkbox"
          :name="name"
          :class="errors[0] ? 'error' : ''"
        )
        label(:for="`${id}-${_camelCase(option)}`")
          span {{ option.label || option }}

    div(v-else)
      input.mr-3(
        v-bind="field"
        :id="id"
        :checked="checked"
        :value="name"
        :disabled="disabled"
        :name="name"
        type="checkbox"
        :class="errors[0] ? 'error' : ''"
      )
      label(:for="id")
        span.font-bold {{ label }}

    .errors.full
      ul(class="text-error marker:text-error-500 dark:text-error-dark marker:dark:text-error-900")
        li(v-for="error in errors") {{ error }}
    .errors.single(class="text-error dark:text-error-dark") {{ errors[0] }}

    label(v-if="hint" :for="id")
      span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

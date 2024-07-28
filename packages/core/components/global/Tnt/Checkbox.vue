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
  return useValidations(props.rules?.format || props.type || props.options ? 'array' : 'string', props.rules, props.label)
})

const error = useFieldError(props.name)

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div
  fieldset(v-if="options")
    label(v-if="label")
      span.font-bold(v-if="label" v-html="label")

    div(v-for="option in options")
      TntCheckboxArchetype(:name="name", :checkedValue="option.value || option" :label="option.label || option")

  div(v-else)
    VeeField(
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      :name="name"
      :rules="computedRules"
      v-slot="{ field, value, errors }"
    )
      div
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

  .errors.single(class="text-error dark:text-error-dark") {{ error }}

  label(v-if="hint" :for="id")
    span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

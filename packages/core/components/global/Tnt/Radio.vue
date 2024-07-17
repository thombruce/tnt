<script setup>
// TODO: Rename Radio.vue to RadioGroup.vue for consistency with Checkbox and CheckboxGroup
//       Also remove v-else for singular Radio buttons (I can't think of a situation this would be valid)
const props = defineProps({
  modelValue: {
    default: ''
  },
  label: { type: String },
  id: {
    type: String,
    default: (props) => `${_camelCase(props.label || 'radio')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props) => _camelCase(props.label || 'radio')
  },
  hint: {},
  options: {},
})

defineEmits([
  'update:modelValue'
])
</script>

<template lang="pug">
div
  fieldset(v-if="options")
    legend(v-if="label")
      span.font-bold(v-if="label" v-html="label")
    div(v-for="option in options")
      input.mr-3(
        :id="`${id}-${_camelCase(option)}`"
        :checked="modelValue == (option.value || option)"
        @change="$emit('update:modelValue', $event.target.value)"
        :value="option.value || option"
        type="radio"
        :name="name"
      )
      label(:for="`${id}-${_camelCase(option)}`")
        span {{ option.label || option }}
    label(v-if="hint" :for="id")
      span.text-xs.text-gray-500(v-if="hint" v-html="hint")
  div(v-else)
    //- TODO: It occurs to me there's no point in an isolated radio button.
    //-       Remove this v-else.
    input.mr-3(
      :id="id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      :name="name"
      type="radio"
    )
    label(:for="id")
      span.font-bold {{ label }}
</template>

<style lang="postcss" scoped>
input {
  @apply
    checked:bg-primary
    checked:focus:bg-primary-hover
    checked:hover:bg-primary-hover
    dark:checked:bg-primary-dark
    dark:checked:focus:bg-primary-dark-hover
    dark:checked:hover:bg-primary-dark-hover;
}
</style>

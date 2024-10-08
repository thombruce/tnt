<script setup lang="ts">
const props = defineProps({
  modelValue: {
    default: ''
  },
  label: {
    type: String,
  },
  id: {
    type: String,
    default: (props: any) => `${_camelCase(props.label || 'toggle')}-${_uniqueId()}`
  },
  name: {
    type: String,
    default: (props: any) => props.label ? _camelCase(props.label) : `toggle-${_uniqueId()}`
  },
  hint: {},
  checked: {
    type: [Boolean, String],
  },
  unchecked: {
    type: [Boolean, String],
  },
  disabled: {
    type: [Boolean, String],
  },
  fullErrors: {
    type: Boolean
  },
  rules: {
    type: Object,
  }
})

const emit = defineEmits(['update:modelValue'])

const computedRules = computed(() => {
  return useValidations(props.rules?.format || 'string', props.rules, props.label)
})

const { value, checked: isChecked, handleChange, errors } = useField(() => props.name, computedRules.value, {
  syncVModel: true,
  type: 'checkbox',
  initialValue: props.modelValue,
  valueProp: props.modelValue,
  checkedValue: props.checked,
  uncheckedValue: props.unchecked,
})

const onChange = async (event: any) => {
  await handleChange(event)
  emit('update:modelValue', event.target.value)
}
</script>

<template lang="pug">
div(:class="fullErrors ? 'full-errors' : undefined")
  label(class="inline-flex items-center cursor-pointer")
    input(
      :value="value"
      :id="`${name}-${_camelCase(checkedValue)}`"
      :name="name"
      :checked="isChecked"
      @change="onChange($event)"
      type="checkbox"
      class="sr-only peer"
    )
    .toggle(
      :class="`${label ? 'mr-3 ' : ''}${errors[0] ? 'error ' : ''}`"
    )
    span.font-bold {{ label }}

  .errors.full
    ul(class="text-error marker:text-error-500 dark:text-error-dark marker:dark:text-error-900")
      li(v-for="error in errors") {{ error }}
  .errors.single(class="text-error dark:text-error-dark") {{ errors[0] }}

  label(v-if="hint" :for="id")
    span.text-xs.text-gray-500(v-if="hint" v-html="hint")
</template>

<style lang="postcss">
.toggle {
  @apply
    relative
    w-11
    h-6
    peer-focus:outline-none
    peer-focus:ring-4
    rounded-full
    peer-checked:after:translate-x-full
    rtl:peer-checked:after:-translate-x-full
    after:content-['']
    after:absolute
    after:top-[2px]
    after:start-[2px]
    after:border
    after:rounded-full
    after:h-5
    after:w-5
    after:transition-all
    /* Colors */
    bg-base-200
    peer-focus:ring-primary-300
    dark:peer-focus:ring-primary-800
    dark:bg-base-700
    peer-checked:after:border-white
    after:bg-white
    after:border-base-300
    dark:border-base-600
    peer-checked:bg-primary-600;
  &.success {
    @apply
      peer-focus:ring-success-300
      dark:peer-focus:ring-success-800
      peer-checked:bg-success-600;
  }
  &.warning {
    @apply
      peer-focus:ring-warning-300
      dark:peer-focus:ring-warning-800
      peer-checked:bg-warning-600;
  }
  &.danger, &.error {
    @apply
      peer-focus:ring-error-300
      dark:peer-focus:ring-error-800
      peer-checked:bg-error-600;
  }
  &.neutral {
    @apply
      peer-focus:ring-neutral-300
      dark:peer-focus:ring-neutral-800
      peer-checked:bg-neutral-600;
  }
}
</style>

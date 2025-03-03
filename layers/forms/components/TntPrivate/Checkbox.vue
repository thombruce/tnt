<script setup lang="ts">
import { useField } from 'vee-validate'

const { name, checkedValue, label } = defineProps<{
  name: string,
  checkedValue: string,
  label: string,
}>()

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { handleChange, checked, errors } = useField(() => name, undefined, {
  type: 'checkbox',
  checkedValue: checkedValue,
})
</script>

<template lang="pug">
div
  input.mr-3(
    :id="`${name}-${_camelCase(checkedValue)}`"
    :name="name"
    :checked="checked"
    @change="handleChange"
    type="checkbox"
    :class="errors[0] ? 'error' : ''"
  )
  label(:for="`${name}-${_camelCase(checkedValue)}`")
    span {{ label || checkedValue }}
</template>

<script setup>
import { useIsFormDirty } from 'vee-validate'

const props = defineProps({
  label: {
    type: String,
    default: 'Submit'
  }
})

const isDirty = useIsFormDirty()
</script>

<template lang="pug">
button(type="submit" :disabled="!isDirty") {{ label }}
</template>

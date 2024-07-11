<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'submit'
  },
  label: {
    type: String,
    default: (props) => _startCase(props.type)
  }
})
</script>

<template lang="pug">
button(:type="type") {{ label }}
</template>

<style lang="postcss">
button {
  @apply
    py-2
    px-4
    rounded
    font-bold
    text-white
    bg-blue-600
    hover:bg-blue-700;
}
</style>
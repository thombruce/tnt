<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 100
    }
  }
}
</script>

<template>
  <progress class="progress progress-primary block w-full" :value="value" :max="max"></progress>
</template>

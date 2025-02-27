<script setup lang="ts">
const { closeable = true } = defineProps<{
  closeable?: boolean,
}>()

const closed = ref()

const close = () => {
  closed.value = true
}

const runtimeConfig = useRuntimeConfig()
</script>

<template lang="pug">
TntCard(v-if="!closed" :v-bind="$props")
  template(v-if="runtimeConfig.public?.content")
    ContentSlot(:use="$slots.default")
  template(v-else)
    slot
  template(#actions)
    button.btn-none(v-if="closeable" type="button" @click="close()")
      Icon(name="fa6-solid:xmark")/
      span.sr-only Close
</template>

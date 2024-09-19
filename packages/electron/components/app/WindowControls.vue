<script setup lang="ts">
import { useTntWindow } from '~/composables/tntWindow'

const { minimize, maximize, close } = useTntWindow()
</script>

<template lang="pug">
ul.flex-0
  li
    TntButton.btn-none(@click="minimize()")
      Icon(name="fa6-solid:minus")/
      span.sr-only Close
  li
    TntButton.btn-none(@click="maximize()")
      Icon(name="fa6-regular:square")/
      span.sr-only Close
  li
    TntButton.btn-none(@click="close()")
      Icon(name="fa6-solid:xmark")/
      span.sr-only Close
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~/stores/counter'

const store = useCounterStore()

const { count, doubleCount } = storeToRefs(store)

const { increment } = store
</script>

<template>
  <button class="btn" @click="increment">You have pressed me {{ count }} times</button>
  <p>That's half of {{ doubleCount }}!</p>
</template>
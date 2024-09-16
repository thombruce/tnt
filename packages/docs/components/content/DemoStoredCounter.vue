<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

// Store
const store = useCounterStore()
// Store: State/Getters
const { count } = storeToRefs(store)
// Store: Actions
const { increment } = store
</script>

<template lang="pug">
TntButton(@click="increment()") You have clicked me {{ count }} times
</template>

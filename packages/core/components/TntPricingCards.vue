<script setup lang="ts">
// Plural

const {
  cards
} = defineProps<{
  cards: object[]
}>()
</script>

<template lang="pug">
div(class="flex gap-2")
  TntPricingCard(v-for="card in cards" v-bind="card" class="flex-grow")
</template>

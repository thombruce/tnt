<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
  <div class="w-full">
    <NuxtLink v-if="prev" :to="prev._path">« {{ prev.title }}</NuxtLink>
    <NuxtLink v-if="next" :to="next._path" class="float-right">{{ next.title }} »</NuxtLink>
  </div>
</template>

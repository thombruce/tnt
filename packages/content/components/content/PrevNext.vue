<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template lang="pug">
.not-prose.my-8
  NuxtLink(v-if="prev" :to="prev._path") « {{ prev.title }}
  NuxtLink(v-if="next" :to="next._path" class="float-right") {{ next.title }} »
</template>

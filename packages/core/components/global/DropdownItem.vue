<script setup lang="ts">
const props = defineProps([
  'path',
  'title'
])

const closeMenu = inject('closeMenu')
</script>

<template lang="pug">
li
  NuxtLink.block.w-full.p-2(
    :to="path"
    @click="closeMenu"
    class="hover:bg-primary-200 dark:hover:bg-primary-900"
  )
    slot
</template>

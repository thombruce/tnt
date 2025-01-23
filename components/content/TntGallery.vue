<script setup lang="ts">
const {
  images = []
} = defineProps<{
  images?: any[]
}>()

let klass = ''

switch (images.length) {
  case 1:
    klass = 'grid-cols-1'
    break
  case 2:
    klass = 'grid-cols-2'
    break
  case 3:
    klass = 'grid-cols-3'
    break
  case 4:
  default:
    klass = 'grid-cols-4'
}
</script>

<template lang="pug">
.not-prose.grid(:class="klass")
  NuxtLink.block.aspect-square(v-for="image in images" :to="image._path")
    NuxtImg.w-full.h-full.object-cover(:src="image._file" fit="cover" width="600" height="600")
</template>

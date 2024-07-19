<script lang="ts" setup>
const route = useRoute()

const { data: prevNext } = await useAsyncData(
  `tnt-prevnext-${route.path}`,
  () => queryContent()
    .where([
      { navigation: { $ne: false } },
      { _path: {
        $regex: new RegExp(`^${route.path.substring(0, route.path.lastIndexOf('/'))}/.+`)
      } },
      { _partial: false }
    ])
    .findSurround(route.path)
)
</script>

<template lang="pug">
.tnt-prevnext.not-prose
  div(v-if="[prev, next] = prevNext")
    .tnt-prev
      NuxtLink(v-if="prev" :to="prev._path") {{ prev.title }}
    .tnt-next
      NuxtLink(v-if="next" :to="next._path") {{ next.title }}
</template>

<style lang="postcss" scoped>
.tnt-prevnext > div {
  @apply my-8 flex justify-between;
}

.tnt-prev > a::before {
  @apply pr-2;
  content: "«";
}

.tnt-next > a::after {
  @apply pl-2;
  content: "»";
}
</style>

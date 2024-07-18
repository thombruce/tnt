<template lang="pug">
ContentQuery(:path="$route.path" find="surround" v-slot="{ data: [prev, next] }")
  .tnt-prevnext.not-prose(v-if="prev || next")
    .tnt-prev
      NuxtLink(v-if="prev" :to="prev._path") {{ prev.title }}
    .tnt-next
      NuxtLink(v-if="next" :to="next._path") {{ next.title }}
</template>

<style lang="postcss" scoped>
.tnt-prevnext {
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

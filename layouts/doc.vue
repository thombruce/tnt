<script lang="ts" setup>
import type { PageCollections } from '@nuxt/content';

// TODO: Enable some kind of sensible default value for collection.
//       Should it be 'docs'? Should it be 'pages'?
//       Should we attempt to infer it from the route?
const { collection }: { collection?: keyof PageCollections | undefined } = useAttrs()
</script>

<template lang="pug">
NuxtLayout(name="base")
  .grid.grid-cols-10.gap-10
    .col-span-2(v-if="$slots.nav")
      slot(name="nav")
    div(:class="($slots.nav && $slots.toc) ? 'col-span-6' : ($slots.nav || $slots.toc) ? 'col-span-8' : 'col-span-10'")
      TntBreadcrumbs(:collection="collection")/
      slot
      TntPrevNext(:collection="collection")/
    .col-span-2(v-if="$slots.toc")
      slot(name="toc")
</template>

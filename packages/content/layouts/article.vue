<script lang="ts" setup>
import type { PageCollections } from '@nuxt/content';

const { collection = 'pages' }: { collection?: keyof PageCollections | undefined } = useAttrs()
</script>

<template lang="pug">
NuxtLayout(name="base")
  .grid.grid-cols-10.gap-10
    div(:class="($slots.toc) ? 'col-span-8' : 'col-span-10'")
      TntBreadcrumbs(:collection="collection")/

      slot(name="header")

      slot

      TntPrevNext(:collection="collection")/

    .col-span-2(v-if="$slots.toc")
      slot(name="toc")
</template>

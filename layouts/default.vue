<script lang="ts" setup>
import type { PageCollections } from '@nuxt/content';

const { collection = 'pages' }: { collection?: keyof PageCollections | undefined } = useAttrs()
</script>

<template lang="pug">
NuxtLayout(name="base")
  .grid.grid-cols-10.gap-10
    .col-span-10
      TntBreadcrumbs(:collection="collection")/
      slot
</template>
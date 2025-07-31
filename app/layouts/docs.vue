<script lang="ts" setup>
import type { PageCollections } from '@nuxt/content'

const { page, collection, theme }: { page?: any, collection?: keyof PageCollections, theme?: 'solid' | 'ghost' } = useAttrs()

// NOTE: useAsyncData removed
const navItems = await tntNav(true, collection)

const showNav = computed(() => page?.nav !== false && navItems)
const showToC = computed(() => page?.toc !== false && page?.body.toc?.links.length)
</script>

<template lang="pug">
NuxtLayout(:theme="theme" :collection="collection")

  div(class="grid grid-cols-10 gap-10")

    div(v-if="showNav" class="col-span-2 hidden md:flex")

      UNavigationMenu(
        :items="navItems"
        orientation="vertical"
        :unmount-on-hide="false"
      )/

    div(:class="(showNav && showToC) ? 'col-span-10 md:col-span-6' : (showNav || showToC) ? 'col-span-10 md:col-span-8' : 'col-span-10'")

      TntTocCollapsible(v-if="showToC" :toc="page?.body.toc")/

      slot

    div(v-if="showToC" class="col-span-2 hidden md:flex")
      div
        strong On this page
        TntToc(:toc="page?.body.toc")
</template>

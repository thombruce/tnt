<!--
  Overrides the default ProsePre provided by Nuxt Content.
  This enables us to more easily set light and dark color
  themes, which are otherwise difficult to negotiate between
  conflicting rules of Tailwind Typography and Shiki language
  highlighting.
-->

<script setup lang="ts">
const { language, filename } = defineProps<{
  language?: string
  filename?: string
}>()
</script>

<template lang="pug">
pre(class="relative bg-neutral-100 dark:bg-neutral-950")
  slot/
  div(
    v-if="language || filename"
    class="absolute top-0 right-0 px-4 py-2 text-neutral-500"
  ) {{ language }}{{ language && filename ? ': ' : '' }}{{ filename }}
</template>

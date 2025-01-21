<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

const { content = '' } = defineProps<{
  content: string
}>()

const ast = await parseMarkdown(content)
</script>

<template lang="pug">
MDCRenderer(v-if="ast" :body="ast.body" :data="ast.data")/
</template>

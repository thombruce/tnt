<script setup lang="ts">
import { useDirectoryStore } from '@/stores/directory'
import { storeToRefs } from 'pinia'

const props = defineProps({
  path: {
    type: String,
    default: ''
  },
  exclude: [RegExp, Array],
  extensions: RegExp,
  // attributes: Array,
  // normalizePath: Boolean,
  depth: Number,
  filter: RegExp,
  links: {
    type: Boolean,
    default: true
  }
})

// Store
const store = useDirectoryStore()
// Store: State/Getters
const { tree } = storeToRefs(store)
// Store: Actions
const { fetchDirectory } = store

// Init
fetchDirectory(props.path, { exclude: props.exclude, extensions: props.extensions, depth: props.depth })
</script>

<template lang="pug">
slot(:files="tree")
  TntElectronDirectoryTree(:files="tree" :open="true" :filter="filter" :links="links")
</template>

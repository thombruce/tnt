<script setup>
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

const files = ref([])

async function fetchFiles() {
  const dir = await useTntApi().listFiles(props.path, { exclude: props.exclude, extensions: props.extensions, depth: props.depth })
  if (dir) files.value = dir
}

fetchFiles()
</script>

<template lang="pug">
slot(:files="files")
  TntElectronDirectoryTree(:files="files" :open="true" :filter="filter" :links="links")
</template>

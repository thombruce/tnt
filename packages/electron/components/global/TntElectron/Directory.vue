<script setup>
const props = defineProps({
  path: {
    type: String,
    default: './'
  },
  recursive: {
    type: Boolean,
    default: false
  },
  filter: RegExp,
  links: {
    type: Boolean,
    default: true
  }
})

const files = ref([])

async function fetchFiles() {
  const dir = await useTntApi().listFiles(props.path, { recursive: props.recursive })
  if (dir) files.value = props.filter ? dir.filter(f => props.filter.test(f)) : dir
}

fetchFiles()
</script>

<template lang="pug">
slot(:files="files")
  ul.space-y-2
    li(v-for="file in files" :key="file")
      NuxtLink(v-if="links" :to="file") {{ file }}
      template(v-else) {{ file }}
</template>

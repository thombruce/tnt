<script setup>
const props = defineProps({
  rootDir: String,
  files: Object,
  open: {
    type: Boolean,
    default: false
  },
  links: Boolean,
  filter: RegExp,
})

const children = computed(() => {
  let filtered = props.filter ? props.files.children?.filter(f => f.children || props.filter.test(f.name)) : props.files.children
  return _sortBy(filtered, ['children', 'name'])
})
</script>

<template lang="pug">
details(:open="open")
  summary.cursor-pointer {{ files.name }}
  ul.ml-4
    li(v-for="child in children")
      component(
        v-if="child.children"
        is="tnt-electron-directory-tree"
        v-bind="_omit(props, ['files', 'open'])"
        :files="child"
      )
      NuxtLink(v-else-if="links" :to="child.path.replace(`${rootDir}/`, '')" :key="child.path")  {{ child.name }}
      span(v-else :key="child.path")  {{ child.name }}
</template>

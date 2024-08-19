<script setup>
import { useDirectoryStore } from '@/stores/directory'
import { storeToRefs } from 'pinia'

const props = defineProps({
  files: Object,
  open: {
    type: Boolean,
    default: false
  },
  links: Boolean,
  filter: RegExp,
})

// Store
const store = useDirectoryStore()
// Getters
const { root } = storeToRefs(store)
// Store: Actions
const { deleteFile } = store

const children = computed(() => {
  let filtered = props.filter ? props.files.children?.filter(f => f.children || props.filter.test(f.name)) : props.files.children
  return _sortBy(filtered, [function(o) { return !o.children }, 'name'])
})
</script>

<template lang="pug">
details(:open="open")
  summary.cursor-pointer
    TntElectronDirectoryTreeFileName(v-if="files.path !== root" v-model:path="files.path" v-model:name="files.name")
    span(v-else) {{ files.name }}
    TntButton.btn-none.float-right(v-if="files.path !== root" @click="deleteFile(files.path.replace(`${root}/`, ''))" class="text-danger-light hover:text-danger-light-hover dark:text-danger-dark dark:hover:text-danger-dark-hover")
      Icon(name="fa6-solid:trash-can")
  ul.ml-4
    li(v-for="child in children" :key="child.path")
      component(
        v-if="child.children"
        is="tnt-electron-directory-tree"
        v-bind="_omit(props, ['files', 'open'])"
        :files="child"
      )
      span(v-else-if="links")
        TntElectronDirectoryTreeFileName(v-model:path="child.path" v-model:name="child.name" :link="links")
        TntButton.btn-none.float-right(@click="deleteFile(child.path.replace(`${root}/`, ''))" class="text-danger-light hover:text-danger-light-hover dark:text-danger-dark dark:hover:text-danger-dark-hover")
          Icon(name="fa6-solid:trash-can")
      TntElectronDirectoryTreeFileName(v-else v-model:path="child.path" v-model:name="child.name")
</template>

<style lang="postcss" scoped>
details li {
  @apply hover:bg-base-900/50;
}
</style>

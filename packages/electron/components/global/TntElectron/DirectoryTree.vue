<script setup lang="ts">
import { useDirectoryStore } from '@/stores/directory'
import { storeToRefs } from 'pinia'

const props = defineProps({
  files: {
    type: Object,
    required: true,
  },
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
const { fullRoot, fullRootRegExp } = storeToRefs(store)
// Store: Actions
const { createFile, createFolder, deleteFile } = store

const children = computed(() => {
  let filtered = props.filter ? props.files.children?.filter((f: any) => f.children || props.filter?.test(f.name)) : props.files.children
  return _sortBy(filtered, [function(o) { return !o.children }, 'name'])
})

// Adding new files
const newFile = ref('')
const addingNewFile = ref(false)
const newFileRules = ref({
  matches: props.filter
})

function createNewFile() {
  createFile(`${props.files.path.replace(fullRootRegExp.value, '.')}/${newFile.value}`)
  newFile.value = ""
  addingNewFile.value = false
}

function cancelNewFile() {
  newFile.value = ""
  addingNewFile.value = false
}

// Adding new folders
const newFolder = ref('')
const addingNewFolder = ref(false)

function createNewFolder() {
  // TODO: Should this be a separate store action?
  createFolder(`${props.files.path.replace(fullRootRegExp.value, '.')}/${newFolder.value}`)
  newFolder.value = ""
  addingNewFolder.value = false
}

function cancelNewFolder() {
  newFolder.value = ""
  addingNewFolder.value = false
}
</script>

<template lang="pug">
details(:open="open")
  summary.cursor-pointer
    TntElectronDirectoryTreeFileName(v-if="files.path !== fullRoot" v-model:path="files.path" v-model:name="files.name")
    span(v-else) {{ files.name }}
    TntButton.btn-none.float-right(v-if="files.path !== fullRoot" @click="deleteFile(files.path.replace(fullRootRegExp, '.'))" class="text-danger-light hover:text-danger-light-hover dark:text-danger-dark dark:hover:text-danger-dark-hover")
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
        TntButton.btn-none.float-right(@click="deleteFile(child.path.replace(fullRootRegExp, '.'))" class="text-danger-light hover:text-danger-light-hover dark:text-danger-dark dark:hover:text-danger-dark-hover")
          Icon(name="fa6-solid:trash-can")
      TntElectronDirectoryTreeFileName(v-else v-model:path="child.path" v-model:name="child.name")
    li
      TntButton.btn-none(v-if="!addingNewFile" @click="addingNewFile = true")
        span New file
        Icon.ml-2(name="fa6-solid:file")
      TntForm.inline(v-else @submit="createNewFile()" @keydown.esc="cancelNewFile()")
        TntInput.inline-block(v-model="newFile" :rules="newFileRules")
        TntSubmit.btn-none.ml-2
          Icon(name="fa6-solid:plus")
    li
      TntButton.btn-none(v-if="!addingNewFolder" @click="addingNewFolder = true")
        span New folder
        Icon.ml-2(name="fa6-solid:folder")
      TntForm.inline(v-else @submit="createNewFolder()" @keydown.esc="cancelNewFolder()")
        TntInput.inline-block(v-model="newFolder")
        TntSubmit.btn-none.ml-2
          Icon(name="fa6-solid:plus")
</template>

<style lang="postcss" scoped>
details li {
  @apply hover:bg-base-900/50;
}
</style>

<script setup>
import { useDirectoryStore } from '@/stores/directory'
import { storeToRefs } from 'pinia'

import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sidebar = useSidebar()

const path = defineModel('path')
const name = defineModel('name')

const props = defineProps([
  'link',
])

const newName = ref(name.value)

const editing = ref(false)

// Store
const store = useDirectoryStore()
// Getters
const { fullRootRegExp } = storeToRefs(store)
// Store: Actions
const { renameFile } = store

function rename() {
  const regex = new RegExp(`${name.value}$`)
  const newPath = path.value.replace(regex, newName.value)
  renameFile(path.value.replace(fullRootRegExp.value, '.'), newPath.replace(fullRootRegExp.value, '.'))
  path.value = newPath
  name.value = newName.value
  editing.value = false
}

function cancel() {
  newName.value = name.value
  editing.value = false
}

const toPath = computed(() => path.value.replace(fullRootRegExp, ''))
</script>

<template lang="pug">
TntForm.inline(v-if="editing" @submit="rename()" @keydown.esc="cancel()")
  TntInput.inline-block(v-model="newName")
  TntSubmit.btn-none.ml-2
    Icon(name="fa6-solid:floppy-disk")
template(v-else)
  //- NOTE: File paths are handled differently on Windows vs Unix;
  //-       We need to check for and add a / if one isn't present
  //-       after fullRootRegExp has done its thing.
  NuxtLink(
    v-if="link"
    :to="`${toPath.startsWith('/') ? '' : '/'}${toPath}`"
    @click="breakpoints.smallerOrEqual('md').value ? sidebar = false : null"
  )
    span {{ name }}
    TntButton.btn-none(@click.prevent="editing = true")
      Icon.ml-2(name="fa6-solid:pencil")
  template(v-else)
    span {{ name }}
    TntButton.btn-none(@click.prevent="editing = true")
      Icon.ml-2(name="fa6-solid:pencil")
</template>

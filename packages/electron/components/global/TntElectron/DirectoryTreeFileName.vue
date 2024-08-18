<script setup>
import { useDirectoryStore } from '@/stores/directory'
import { storeToRefs } from 'pinia'

const props = defineProps([
  'path',
  'name',
  'link',
])

const value = ref(props.name)

const editing = ref(false)

// Store
const store = useDirectoryStore()
// Getters
const { root } = storeToRefs(store)
// Store: Actions
const { renameFile } = store

function rename() {
  // TODO: This breaks for subsequent edits - name prop is not reactive
  // TODO: Nested items also cannot be updated if the directory name has also already been changed
  //       Again, the props aren't reactive!
  const regex = new RegExp(`${props.name}$`)
  const newPath = props.path.replace(regex, value.value)
  renameFile(props.path, newPath)
  editing.value = false
}

function cancel() {
  editing.value = false
  // TODO: This breaks if already edited - name prop is not reactive
  value.value = props.name
}
</script>

<template lang="pug">
TntForm.inline(v-if="editing" @submit="rename()" @keydown.esc="cancel()")
  TntInput.inline-block(v-model="value")
  TntSubmit.btn-none.ml-2
    Icon(name="fa6-solid:floppy-disk")
template(v-else)
  NuxtLink(v-if="link" :to="path.replace(`${root}/`, '')")
    span {{ value }}
    TntButton.btn-none(@click.prevent="editing = true")
      Icon.ml-2(name="fa6-solid:pencil")
  template(v-else)
    span {{ value }}
    TntButton.btn-none(@click.prevent="editing = true")
      Icon.ml-2(name="fa6-solid:pencil")
</template>

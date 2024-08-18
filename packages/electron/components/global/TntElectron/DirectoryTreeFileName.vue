<script setup>
import { useDirectoryStore } from '@/stores/directory'

const props = defineProps([
  'path',
  'name'
])

const value = ref(props.name)

const editing = ref(false)

// Store
const store = useDirectoryStore()
// Store: Actions
const { renameFile } = store

function rename() {
  const regex = new RegExp(`${props.name}$`)
  const newPath = props.path.replace(regex, value.value)
  renameFile(props.path, newPath)
  editing.value = false
}
</script>

<template lang="pug">
TntForm.inline(v-if="editing" @submit="rename()" @keydown.esc="editing = false")
  TntInput.inline-block(v-model="value")
  TntSubmit.btn-none.ml-2
    Icon(name="fa6-solid:floppy-disk")
template(v-else)
  span {{ name }}
  TntButton.btn-none(@click.prevent="editing = true")
    Icon.ml-2(name="fa6-solid:pencil")
</template>

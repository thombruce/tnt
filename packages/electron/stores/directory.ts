import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { useTntApi } from '@thombruce/tnt/composables/tntApi'
import { DirectoryTree } from 'directory-tree'

import _uniqueId from 'lodash/uniqueId'

import { useToasts } from '@thombruce/tnt/composables/states'

const toasts = useToasts()

export const useDirectoryStore = defineStore('directory', () => {
  // State
  const tree = ref({} as DirectoryTree)

  const root = ref('')

  // Getters
  const fullRoot = computed(() => tree.value.path)

  const fullRootRegExp = computed(() => new RegExp(`${fullRoot.value}/?`))

  // Actions
  async function fetchDirectory(path:string, opts?:object) {
    if (!!root.value) root.value = path
    const dir = await useTntApi().listFiles(path, opts)
    if (dir) tree.value = dir
  }
  
  async function createFile(file:string) {
    await useTntApi().updateFile(file)
    toasts.value.push({
      uid: _uniqueId('tnt-toast-create-file-'),
      duration: 5000,
      color: 'success',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Added' },
        { is: 'p', content: `A file has been created at ${file}.` },
      ],
      actions: [
        { is: 'Icon', props: { class: 'text-2xl', name: 'fa6-solid:file' } }
      ]
    })
    fetchDirectory(root.value)
  }
  
  async function createFolder(folder:string) {
    await useTntApi().createFolder(folder)
    toasts.value.push({
      uid: _uniqueId('tnt-toast-create-folder-'),
      duration: 5000,
      color: 'success',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Added' },
        { is: 'p', content: `A folder has been created at ${folder}.` },
      ],
      actions: [
        { is: 'Icon', props: { class: 'text-2xl', name: 'fa6-solid:folder' } }
      ]
    })
    fetchDirectory(root.value)
  }

  async function renameFile(file:string, name:string) {
    await useTntApi().renameFile(file, name)
    toasts.value.push({
      uid: _uniqueId('tnt-toast-rename-file-'),
      duration: 5000,
      color: 'primary',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Renamed' },
        { is: 'p', content: `${file} has been renamed to ${name}.` },
      ],
      actions: [
        { is: 'Icon', props: { class: 'text-2xl', name: 'fa6-solid:info' } }
      ]
    })
    fetchDirectory(root.value)
  }

  async function deleteFile(file:string) {
    await useTntApi().deleteFile(file)
    toasts.value.push({
      uid: _uniqueId('tnt-toast-delete-file-'),
      duration: 5000,
      color: 'danger',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Deleted' },
        { is: 'p', content: `${file} has been sent to your trash folder.` },
      ],
      actions: [
        { is: 'Icon', props: { class: 'text-2xl', name: 'fa6-solid:trash-can' } }
      ]
    })
    fetchDirectory(root.value)
  }

  return {
    // State
    tree,
    root,
    // Getters
    fullRoot,
    fullRootRegExp,
    // Actions
    fetchDirectory,
    createFile,
    createFolder,
    renameFile,
    deleteFile,
  }
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { useTntApi } from '@thombruce/tnt/composables/tntApi'
import { DirectoryTree } from 'directory-tree'

import _uniqueId from 'lodash/uniqueId'

import { useToasts } from '@thombruce/tnt/composables/states'

export const useDirectoryStore = defineStore('directory', () => {
  // State
  const tree = ref({} as DirectoryTree)

  // Getters
  const root = computed(() => tree.value.path)

  // Actions
  async function fetchDirectory(path:string, opts?:object) {
    const dir = await useTntApi().listFiles(path, opts)
    if (dir) tree.value = dir
  }

  async function deleteFile(file:string) {
    const toasts = useToasts()
    await useTntApi().deleteFile(file)
    toasts.value.push({
      uid: _uniqueId('tnt-toast-delete-file-'),
      duration: 5000,
      color: 'danger',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Deleted' },
        { is: 'p', content: 'This file has been sent to your trash folder.' },
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
    // Getters
    root,
    // Actions
    fetchDirectory,
    deleteFile,
  }
})

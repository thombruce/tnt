import { isElectron } from '../utils/is-electron'

export const useTntApi = () => {
  return {
    minimize: () => {
      if (isElectron()) {
        window.api.send('minimize-window')
      }
    },
    maximize: () => {
      if (isElectron()) {
        window.api.send('maximize-window')
      }
    },
    close: () => {
      if (isElectron()) {
        window.api.send('close-window')
      }
    },
    loadConfig: async () => {
      if (isElectron()) {
        return await window.api.invoke('load-config')
      }
      return {}
    },
    updateConfig: async (config) => {
      if (isElectron()) {
        return await window.api.send('update-config', config)
      }
      return {}
    },
    listFiles: async (folder, opts?:object) => {
      if (isElectron()) {
        return await window.api.invoke('list-files', folder, opts)
      }
      return
    },
    renameFile: async (file:string, name:string) => {
      if (isElectron()) {
        return await window.api.invoke('rename-file', file, name)
      }
      return
    },
    deleteFile: async (file:string) => {
      if (isElectron()) {
        return await window.api.invoke('delete-file', file)
      }
      return
    },
    loadFile: async (file) => {
      if (isElectron()) {
        return await window.api.invoke('load-file', file)
      } // TODO: else - should we attempt localStorage/IndexedDB/Dexie here?
      return
    },
    updateFile: async (file, content) => {
      if (isElectron()) {
        return await window.api.send('update-file', file, content)
      } // TODO: else - should we attempt localStorage/IndexedDB/Dexie here?
      return
    }
  }
}

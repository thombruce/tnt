import { isElectron } from '../utils/is-electron'

export const useTntApi = () => {
  return {
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

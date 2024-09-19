import { isElectron } from '../utils/is-electron'

export const useTntApi = () => {
  return {
    loadConfig: async () => {
      if (isElectron()) {
        return await (window as any).api.invoke('load-config')
      }
      return {}
    },
    updateConfig: async (config:object) => {
      if (isElectron()) {
        return await (window as any).api.send('update-config', config)
      }
      return {}
    },
    listFiles: async (folder:string, opts?:object) => {
      if (isElectron()) {
        return await (window as any).api.invoke('list-files', folder, opts)
      }
      return
    },
    renameFile: async (file:string, name:string) => {
      if (isElectron()) {
        return await (window as any).api.invoke('rename-file', file, name)
      }
      return
    },
    deleteFile: async (file:string) => {
      if (isElectron()) {
        return await (window as any).api.invoke('delete-file', file)
      }
      return
    },
    loadFile: async (file:string) => {
      if (isElectron()) {
        return await (window as any).api.invoke('load-file', file)
      } // TODO: else - should we attempt localStorage/IndexedDB/Dexie here?
      return
    },
    updateFile: async (file:string, content?:string) => {
      if (isElectron()) {
        return await (window as any).api.send('update-file', file, content)
      } // TODO: else - should we attempt localStorage/IndexedDB/Dexie here?
      return
    },
    createFolder: async (folder:string) => {
      if (isElectron()) {
        return await (window as any).api.send('create-folder', folder)
      } // TODO: else - should we attempt localStorage/IndexedDB/Dexie here?
      return
    }
  }
}

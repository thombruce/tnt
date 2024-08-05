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
    }
  }
}

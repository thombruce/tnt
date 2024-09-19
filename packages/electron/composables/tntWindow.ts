export const useTntWindow = () => {
  return {
    /* Window API Controls */
    minimize: () => {
      (window as any).api.send('minimize-window')
    },
    maximize: () => {
      (window as any).api.send('maximize-window')
    },
    close: () => {
      (window as any).api.send('close-window')
    },
  }
}

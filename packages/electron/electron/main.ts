// Adapted from: https://github.com/gurvancampion/nuxt-electron-trpc-prisma/blob/master/electron/main.ts

import { release } from 'os'
import path from 'path'
import { app, BrowserWindow, ipcMain, shell } from 'electron'

import initIpc from './api'

// Remove electron security warnings only in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/securit
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1'))
  app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32')
  app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

let win: BrowserWindow | null = null

const preload = path.join(__dirname, 'preload.js')
const distPath = path.join(__dirname, '../.output/public')

async function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      preload,
      // Warning: Enabling nodeIntegration and disabling contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: false,
      contextIsolation: true,
    },
    frame: false,
  })

  if (app.isPackaged) {
    win.loadFile(path.join(distPath, 'index.html'))
  }
  else {
    win.loadURL(process.env.VITE_DEV_SERVER_URL!)
    win.webContents.openDevTools()
  }

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:'))
      shell.openExternal(url)
    return { action: 'deny' }
  })
}

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin')
    app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized())
      win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length)
    allWindows[0].focus()
  else
    createWindow()
})

function initWindowFunctions() {
  ipcMain.on('minimize-window', () => {
    win?.isMinimized() ? win?.restore() : win?.minimize()
  })

  ipcMain.on('maximize-window', () => {
    win?.setFullScreen(!win?.isFullScreen())
  })

  ipcMain.on('close-window', () => {
    app.quit()
  })
}

app.whenReady().then(() => {
  initIpc()

  createWindow()

  initWindowFunctions()
})

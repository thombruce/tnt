import { ipcMain } from 'electron'
import fs from 'fs'

export default function initIpc() {
  ipcMain.handle('load-config', () => {
    return new Promise((resolve, reject) => {
      fs.readFile("tnt.config.json", "utf8", function (error, file) {
        if (error) {
          reject(error)
          return
        }
        resolve(JSON.parse(file))
      })
    })

    // NOTE: Alternative pattern; data is returned via IPC send
    // fs.readFile("tnt.config.json", (error, file) => {
    //   if (error) {
    //     console.log(error)
    //     return
    //   }
    //   win!.webContents.send('return-config', JSON.parse(file))
    // })
  })

  ipcMain.on('update-config', (_, config) => {
    return new Promise((resolve, reject) => {
      fs.readFile('tnt.config.json', (error, file) => {
        const newData = file ? { ...JSON.parse(file), ...config } : config
        fs.writeFile('tnt.config.json', JSON.stringify(newData, null, 2), (error) => {
          if (error) {
            reject(error)
            return
          }
          resolve(newData)
        })
      })
    })

    // NOTE: Alternative pattern; data is returned via IPC send
    // fs.readFile('tnt.config.json', (error, file) => {
    //   const newData = file ? { ...JSON.parse(file), ...config } : config
    //   fs.writeFile('tnt.config.json', JSON.stringify(newData, null, 2), (error) => {
    //     if (error) {
    //       console.log(error)
    //       return
    //     }
    //     win!.webContents.send('return-config', newData)
    //   })
    // })
  })

  ipcMain.handle('load-file', (_, path) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf8", function (error, file) {
        if (error) {
          reject(error)
          return
        }
        resolve(file)
      })
    })
  })

  ipcMain.on('update-file', (_, path, content) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf8", (error, file) => {
        fs.writeFile(path, content, (error) => {
          if (error) {
            reject(error)
            return
          }
          resolve(content)
        })
      })
    })
  })
}
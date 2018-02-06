'use strict'

import { app, BrowserWindow, Tray, Menu, ipcMain } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}

let mainWindow
const winURL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

let tray
function createTray() {
  tray = new Tray(
    '/Users/kyy/workspace/electron/rest-time/src/main/assets/logo.png'
  )
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'normal' },
    { label: 'Item2', type: 'normal' },
    { label: 'Item3' },
    { label: 'help', type: 'normal', role: 'help' },
    { label: 'aubout', type: 'normal', role: 'about' },
    { label: 'quit', type: 'normal', role: 'quit' }
  ])
  tray.setContextMenu(contextMenu)
}

let timerId = null
function startCountdown() {
  if (!timerId) {
  }
}

function stopCountdown() {}

function pausedCountdown() {}

function bindIpcEvent() {
  ipcMain.on('fullScreen', (event, fullScreen) => {
    mainWindow.setFullScreen(fullScreen)
  })
  ipcMain.on('startCountdown', (event, timeCount) => {
    console.log(`startCountdown:${timeCount}`)
    startCountdown()
  })
  ipcMain.on('stopCountdown', event => {
    console.log('stopCountdown')
    stopCountdown()
  })
  ipcMain.on('pausedCountdown', event => {
    console.log('pausedCountdown')
    pausedCountdown()
  })
}

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  createTray()
  bindIpcEvent()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */

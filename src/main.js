const { app, BrowserWindow, ipcMain } = require ('electron');
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 600,
        minWidth: 600,
        minHeight: 480,
        frame:false,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    })
   
    //win.loadFile('src/login.html');
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools()

    ipcMain.on('minimizeApp', () => {
        win.minimize()
    })

    ipcMain.on('maximizeRestoreApp', () => {
        if (win.isMaximized()) win.unmaximize()
        else win.maximize()
    })
    ipcMain.on('closeApp', () => {
        win.close()
    })

    win.on("maximize", () => {
        win.webContents.send("isMaximized")
      })
      win.on("unmaximize", () => {
        win.webContents.send("isRestored")
      })

}

app.whenReady().then(() => {
    createWindow()
})
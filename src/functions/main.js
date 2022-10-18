const { app, BrowserWindow, ipcMain } = require ('electron');

function createWindow() {
    const win = new BrowserWindow({
        fullscreen: true,
        frame:false,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    })
    
    win.loadFile("principal.html")
    ipcMain.on('maximizeApp', () => {
        win.minimize()
    })

}

app.whenReady().then(() => {
    createWindow()
})
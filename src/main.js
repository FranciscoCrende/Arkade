const { app, BrowserWindow, ipcMain } = require ('electron');


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
   
    //win.loadFile('src/index.html');
    win.loadFile('src/view/principal.html');
    win.webContents.openDevTools()
    ipcMain.on('minimizeApp', () => {
        win.minimize()
    })

    ipcMain.on('maximizeApp', () => {
        win.maximize()
    })
    ipcMain.on('closeApp', () => {
        win.close()
    })

}

app.whenReady().then(() => {
    createWindow()
})
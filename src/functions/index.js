const { ipcRenderer } = require("electron")

const closeBtn = document.getElementById("closeBtn")
const minimizeBtn = document.getElementById("minimizeBtn")
const maximizeBtn = document.getElementById("maximizeBtn")

minimizeBtn.addEventListener('click', ()=> {
    ipcRenderer.send('minimizeApp')
})

maximizeBtn.addEventListener('click', ()=> {
    ipcRenderer.send('maximizeApp')
})
closeBtn.addEventListener('click', ()=> {
    ipcRenderer.send('closeApp')
})
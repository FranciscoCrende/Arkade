const { ipcRenderer } = require("electron")

const closeBtn = document.getElementById("closeBtn")
const minimizeBtn = document.getElementById("minimizeBtn")
const maximizeBtn = document.getElementById("maximizeBtn")

minimizeBtn.addEventListener('click', ()=> {
    ipcRenderer.send('minimizeApp')
})
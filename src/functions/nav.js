const { ipcRenderer } = require("electron")

var minimizeBtn = null;
var maxResBtn = null;
var closeBtn = null;
var showHideMenus = null;
var nav = null;


fetch('../view/nav.html')
  .then(res => res.text())
  .then(htmlNav => {
    let oldElement = document.querySelector("script#replace_with_navbar");
    let newElement = document.createElement("div");
    newElement.innerHTML = htmlNav;
    oldElement.parentNode.replaceChild(newElement, oldElement);


    minimizeBtn = document.getElementById("minimizeBtn");
    maxResBtn = document.getElementById("maxResBtn");
    closeBtn = document.getElementById("closeBtn");
    showHideMenus = document.getElementById("showHideMenus");
    nav = document.getElementById("nav");
    

    minimizeBtn.addEventListener('click', () => {
        ipcRenderer.send('minimizeApp')
      })
      maxResBtn.addEventListener('click', () => {
        ipcRenderer.send('maximizeRestoreApp')
      })
      closeBtn.addEventListener('click', () => {
        ipcRenderer.send('closeApp')
      })
      })

      function changeMaxResBtn(isMaximizedApp) {
        if (isMaximizedApp) {
          maxResBtn.title = 'Restore'
          maxResBtn.classList.remove("maximizeBtn")
          maxResBtn.classList.add("restoreBtn")
        } else {
          maxResBtn.title = 'Maximize'
          maxResBtn.classList.remove("restoreBtn")
          maxResBtn.classList.add("maximizeBtn")
        }
      }
      
      
      // Escuchamos el proceso de la aplicación cuando nos dice que se maximiza o se restaura.
      ipcRenderer.on("isMaximized", () => {
        changeMaxResBtn(true)
      })
      ipcRenderer.on("isRestored", () => {
        changeMaxResBtn(false)
      })
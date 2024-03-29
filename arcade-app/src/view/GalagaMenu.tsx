import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../models/Menu';
import Menus from '../components/Menus';
import "../styles/principal-styles.css"
const { ipcRenderer } = window.require("electron")


function Principal() {
  const [menuSeleccionado, setMenuSeleccionado] = useState(0);
  const navigate = useNavigate()


  let menus: Menu[] = [

    { title: "PRESS ENTER", function: () => navigate("/Principal")},
    { title: "Jugar", function: () => navigate("/GalagaGame") },
    { title: "Puntaje", function: () => navigate("/score") },
    { title: "Tienda", function: () => navigate("/store") },
    { title: "Salir", function: () => ipcRenderer.send("closeApp") },
    
  ]
  

  return (
    <div>
      
      <div className="money">
        
        <img src="../img/coin.png" alt="" />
      </div>
    
      <div className='letter-container'>
        
        {["G", "A", "L", "A", "G", "A"].map((letter, i) =>
    
          <span className={ 

            ["letter", `delay${i}`].join(" ")}>{letter}</span>
            
        )

        }

      </div>
      <div className='menuP'>
      <Menus menus={menus} />
      </div>
    </div>
  
  )

}


export default Principal;
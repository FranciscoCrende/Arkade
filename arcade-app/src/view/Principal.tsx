import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "../styles/principal-styles.css"
const { ipcRenderer } = window.require("electron")




function Principal() {
    const [menuSeleccionado, setMenuSeleccionado] = useState(0);

    const handleUserKeyPress = (event:KeyboardEvent) => {
      const { key, keyCode } = event;
        console.log("event", event)
      if (keyCode === 40) {
        setMenuSeleccionado(menuSeleccionado + 1);
        console.log("dentro")
      }
      if (keyCode === 38) {
        setMenuSeleccionado(menuSeleccionado - 1);
        console.log("dentro")  
      }

        if (keyCode === 13) {
          setMenuSeleccionado(menuSeleccionado);
          console.log("dentro") 
      }
        
    };
  
    useEffect(() => {
      window.addEventListener('keydown', handleUserKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleUserKeyPress);
      };
    });

    const closeBtn = document.getElementById("closeBtn");
    
    return (
        <div>
            <div className="money">
                <img src="../img/coin.png" alt="" />
            </div>



            <div className='letter-container'>
              {["A","R","K","A","D","E"].map((letter, i) =>

              <span className={
              
              ["letter", `delay${i}`].join(" ")}>{letter}</span>
              )
           
              }
                
            </div>
            <div className="container-menu">
                <ul>
                    <h1 className="enter">PRESS ENTER</h1>
                    <li className="title-games"><Link to="/galagaMenu">{menuSeleccionado == 0 && ">"} GALAGA</Link></li>
                    <li className="title-games"><Link to="/Donkey">{menuSeleccionado == 1 && ">"} </Link>DONKEY KONG</li>
                    <li className="title-games"><Link to="/store">{menuSeleccionado == 2 && ">"}TIENDA</Link></li>
                    <li className="title-games"><Link to="/score">{menuSeleccionado == 3 && ">"}SCORE</Link></li>
                    <button onClick={()=>ipcRenderer.send('closeApp')} id='closeBtn'>{menuSeleccionado == 4 && ">"}EXIT</button>
                </ul>
            </div>
              
        </div>
    )

}

export default Principal;
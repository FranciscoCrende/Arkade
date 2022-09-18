import React, { useEffect, useState } from 'react';
import "../styles/principal-styles.css"
function Principal() {
    const [menuSeleccionado, setMenuSeleccionado] = useState(0);

    const handleUserKeyPress = (event:KeyboardEvent) => {
      const { key, keyCode } = event;
        console.log("event", event)
      if (keyCode === 40) {
        setMenuSeleccionado(menuSeleccionado + 1);
        console.log("dentro")
      }
    };
  
    useEffect(() => {
      window.addEventListener('keydown', handleUserKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleUserKeyPress);
      };
    });
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
                    <li className="title-games"><a href="../view/galaga.html">{menuSeleccionado == 0 && ">"} GALAGA</a></li>
                    <li className="title-games"><a href="../view/donkey.html">{menuSeleccionado == 1 && ">"} </a>DONKEY KONG</li>
                    <li className="title-games"><a href="../view/tienda.html">{menuSeleccionado == 2 && ">"}TIENDA</a></li>
                    <li className="title-games"><a href="../view/score.html">{menuSeleccionado == 3 && ">"}SCORE</a></li>
                </ul>
            </div>
              
        </div>
    )

}

export default Principal;
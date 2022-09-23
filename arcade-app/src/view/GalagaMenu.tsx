import React from "react";
import "../styles/galaga.css"

function GalagaMenu() {
    return (
        <div className="container-galaga-menu">
            <div id="logo">
                <h1>ARKADE</h1>
            </div>
            <div className="container-menus">
                
                    <h1 className="enter-menu">PRESS ENTER</h1>
                    <a className="options-menu">REANUDAR</a>
                    <a className="options-menu">REINICIAR</a>
                    <a className="options-menu">OPCIONES</a>
                    <a className="options-menu">INVENTARIO</a>
                    <a className="options-menu">SALIR</a>

            </div>
        </div>

    )
}
export default GalagaMenu;
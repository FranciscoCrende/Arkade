
import "../styles/socre.css";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../models/Menu';
import Menus from '../componenst/Menus';
import "../styles/tienda.css"
function Store() {
    const [menuSeleccionado, setMenuSeleccionado] = useState(0);
    const navigate = useNavigate()

    let menus: Menu[] = [

        { title: "PRESS ENTER", function: () => navigate("/Principal") },
        { title: "Pocion 1", function: () => navigate("/Principal"), icon: "pocion1.png" },
        { title: "Pocion 2", function: () => navigate("/Principal"), icon: "pocion2.png" },
        { title: "Pocion 3", function: () => navigate("/Principal"), icon: "pocion3.png" },
        { title: "Pocion 4", function: () => navigate("/Principal"), icon: "manzana.png" },
        { title: "Pocion 5", function: () => navigate("/Principal"), icon: "manzanad.png" },
    ]
    return (

        <div>

            <div className="money">

                <img src="../img/coin.png" alt="" />
            </div>

            <div className='letter-container'   >

                {["A", "R", "K", "A", "D", "E"].map((letter, i) =>

                    <span className={

                        ["letter", `delay${i}`].join(" ")}>{letter}</span>
                )}

            </div>
            <div className='menu-tienda'>
                <Menus menus={menus} />
            </div>
            <div className="tarjetap">
                <h1>Pocion 1</h1>
                <img className="pocion1" src="http://localhost:3000/img/pocion1.png" />
                <p>Multiplica la velocidad del player x4</p>
                    </div>
        </div>
    )
}

export default Store;
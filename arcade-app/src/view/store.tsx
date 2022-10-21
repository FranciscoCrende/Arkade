
import "../styles/socre.css";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../models/Menu';
import Menus from '../componenst/Menus';
import "../styles/tienda.css"



function Store() {
    const [menuSeleccionado, setMenuSeleccionado] = useState(0);
    const navigate = useNavigate()
    const items: { menu: Menu, description: string }[] = [
        { menu: { title: "Pocion 1", function: () => navigate("/Principal"), icon: "pocion1.png" }, description: "Esta pocion otorgara a la nave un x2 de volocidad de disparo" },
        { menu: { title: "Pocion 2", function: () => navigate("/Principal"), icon: "pocion2.png" }, description: "Esta pocion otorgara al player resistancia a los tres primeros golpes"  },
        { menu: { title: "Pocion 3", function: () => navigate("/Principal"), icon: "pocion3.png" }, description: "Esta pocion otorgara al player "  },
        { menu: { title: "Pocion 4", function: () => navigate("/Principal"), icon: "manzana.png" }, description: "Esta pocion otorgara al de velocidad"  },
        { menu: { title: "Pocion 5", function: () => navigate("/Principal"), icon: "manzanad.png" }, description: "Esta pocion otorgara al player un x2 de velocidad"  },
    ]
    let menus: Menu[] = [
        { title: "PRESS ENTER", function: () => navigate("/Principal") },
        ...items.map(i => i.menu)
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
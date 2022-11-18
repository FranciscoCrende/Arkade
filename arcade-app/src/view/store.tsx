
import "../styles/score.css";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../models/Menu';
import Menus from '../components/Menus';
import "../styles/tienda.css"



function Store() {
    const [menuSeleccionado, setMenuSeleccionado] = useState(0);
    const navigate = useNavigate()


    let menus: Menu[] = [
        { title: "PRESS ENTER", function: () => navigate("/Principal") },
        { title: "Choque", function: () => navigate("/Principal"), description: { text: "Choque", img: "/img/proteccion.webp", descripcion: "Tomando esta poción al impactar con 2 naves enemigas estas se destruiran"} },
        { title: "Bomba", function: () => navigate("/Principal"), description: { text: "Bomba", img: "/img/bomba.webp", descripcion: "Tomando esta poción tu nave disparara 3 bombas que maten enemigos cercanos" } },
        { title: "Multi", function: () => navigate("/Principal"), description: { text: "Multi", img: "/img/multiplicador.webp", descripcion: "Tomando esta poción se multiplicara x2 la obtencion de puntos" } },
        { title: "Vida", function: () => navigate("/Principal"), description: { text: "Vida", img: "/img/vida.webp", descripcion: "Tomando esta poción obtendras una vida adicional" } },
        { title: "Escudo", function: () => navigate("/Principal"), description: { text: "Escudo", img: "/img/escudo.webp", descripcion: "Tomando esta poción tu nave obtendra un escudo resistente a 3 disparos enemigos" } },
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


        </div>
    )
}

export default Store;
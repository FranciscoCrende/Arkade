
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

            <div className="container-tienda">
                <li className="pociones"><img className="img1" src="../img/manzana.png" alt="" />Pocion 1 <button>+</button></li>
                <li className="pociones"><img className="img2" src="../img/pocion1.png" alt="" />Pocion 2 <button>+</button></li>
                <li className="pociones"><img className="img3" src="../img/pocion2.png" alt="" />Pocion 3 <button>+</button></li>
                <li className="pociones"><img className="img4" src="../img/manzanad.png" alt="" />Pocion 4 <button>+</button></li>
                <li className="pociones"><img className="img5" src="../img/pocion3.png" alt="" />Pocion 5 <button>+</button></li>
            </div>
        </div>
    )
}

export default Store;
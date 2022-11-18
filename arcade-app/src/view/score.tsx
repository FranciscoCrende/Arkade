
import "../styles/score.css";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../models/Menu';
import Menus from '../components/Menus';
import "../styles/principal-styles.css"
const { ipcRenderer } = window.require("electron")

function Score() {
    const [menuSeleccionado, setMenuSeleccionado] = useState(0);
    const navigate = useNavigate()

    let menus: Menu[] = [

        { title: "PRESS ENTER", function: () => navigate("/Principal") },
    ]
    return (

        <><div>

            <div className="money">

                <img src="../img/coin.png" alt="" />
            </div>

            <div className='letter-container'   >

                {["A", "R", "K", "A", "D", "E"].map((letter, i) =>

                    <span className={

                        ["letter", `delay${i}`].join(" ")}>{letter}</span>
                )}
            </div>
            <div className='menu-puntaje'>
                <Menus menus={menus} />
            </div>
        </div>


            <div className="hiscore">
                <a className="btnback" href="/principal">BACK</a>
                <h2>hi-score: 12000</h2> <h2>player: jugador 1</h2>

            </div><div className="container-score">
                <table className="table-score">
                    <tr className="fila1">
                        <th></th>
                        <th>SCORE</th>
                        <th>PLAYER</th>
                    </tr>
                    <tr className="fila2">
                        <td>N°1</td>
                        <td>12000</td>
                        <td>Jugador 1</td>
                    </tr>
                    <tr className="fila3">
                        <td>N°2</td>
                        <td>10000</td>
                        <td>Jugador 2</td>
                    </tr>
                    <tr className="fila4">
                        <td>N°3</td>
                        <td>8000</td>
                        <td>Jugador 3</td>
                    </tr>
                </table>
            </div></>
    )


}

export default Score;
import React from "react";

function Score() {
    return(
                <><div className="money">
            <img src="../img/coin.png" alt="" />1244
        </div><div id="logo">
                <a className="btnback" href="/principal">BACK</a>
                <h1>ARKADE</h1>
            </div><div className="hiscore">
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
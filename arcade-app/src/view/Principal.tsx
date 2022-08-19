import React from 'react';

function Principal() {
    return (
        <div>
            <div className="money">
                <img src="../img/coin.png" alt="">1244</img>
            </div>
            <div id="logo">
                <h1>ARKADE</h1>
            </div>
            <div className="container-menu">
                <ul>
                    <h1 className="enter">PRESS ENTER</h1>
                    <li className="title-games"><a href="../view/galaga.html">GALAGA</a></li>
                    <li className="title-games"><a href="../view/donkey.html"></a>DONKEY KONG</li>
                    <li className="title-games"><a href="../view/tienda.html">TIENDA</a></li>
                    <li className="title-games"><a href="../view/score.html">SCORE</a></li>
                </ul>
            </div>
        </div>
    )

}

export default Principal;


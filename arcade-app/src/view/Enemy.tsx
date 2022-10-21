import React from "react";


interface EnemyProps  {up: number, left: number}
function Enemy({up,left}: EnemyProps) {
    return (
        

            <img
                style={{
                    
                    position: "absolute",
                    top: up+ "px",
                    left: left+ "px",
                    padding: "2px",
                }
                } height="30px" src="./img/mob2.png" alt="" />



        


    )
}

export default Enemy;

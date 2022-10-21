import React from "react";


interface ShootProps  {up: number, left: number}
function Shoot({up,left}: ShootProps) {
    return (
        

            <img src="./img/laser.png" alt="" style={{ 
                
                width:"34px",
                transform: "rotate(270deg)",
                position: "fixed",
                left: left + "px",
                top: up + "px",
                // display:"none"

             }}/>



        


    )
}

export default Shoot;

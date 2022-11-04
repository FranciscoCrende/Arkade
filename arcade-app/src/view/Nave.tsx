import React from "react";

interface NaveProps  {up: number, left: number}
function Nave({up,left}: NaveProps) {

    return (

        
        <>
            <div
                className="nave" style={{
                    position: "fixed",
                    left: left + "px",
                    top: up + "px"
                }}>
                <img height="34px" src="/img/Galaga-PNG-Background.png" />
            </div>


            <div>

            </div></>

    )





}

export default Nave;

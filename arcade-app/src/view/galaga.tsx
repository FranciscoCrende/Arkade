import { getElementError, logDOM } from "@testing-library/react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import NaveModel from "../models/NaveModel";
import ShotModel from "../models/ShotModel";
import Enemie from "./Enemy";
import Nave from "./Nave";
import Shoot from "./Shoot";

const navesInnit: NaveModel[] = Array.from({ length: 50 }, (v, index) => {
    return {
        top: Math.trunc(index / 10) * 35 + 100, left: (index % 10) * 35 + 450
    }
})

function Galaga() {



    const [naves, setNaves] = useState(navesInnit);
    const [left, setLeft] = useState(600);
    const [up, setUp] = useState(500);
    const timeShots = useRef<NodeJS.Timeout>()

    const [shots, setShots] = useState<ShotModel[]>([])

    function shot() {
        setShots(p => [...p, {
            top: up, left
        }])
    }


    function keyDown(e: KeyboardEvent) {
        let { keyCode } = e;
        console.log(keyCode)
        switch (keyCode) {
            case 39:
                setLeft(p => p + 15)
                break;

            case 37:
                setLeft(p => p - 15)
                break;

            case 38:
                setUp(p => p - 15)
                break;

            case 40:
                setUp(p => p + 15)
                break;

            case 32:
                shot()
                break;

            default:
                break;


        }
    }

    useLayoutEffect(() => {
        window.addEventListener("keydown", keyDown)

        return () => {
            window.removeEventListener("keydown", keyDown)
        }
    })


    useEffect(() => {

        if (shots.length)
            timeShots.current = setTimeout(() => {

                if (timeShots.current)
                    clearTimeout(timeShots.current)

                    setNaves(p=>p.filter(nave => !shots.find(shot => comparePosition(nave, shot))) //nave es golpeada
                    )
                setShots(p => p
                    .filter(shot => shot.top > 5) //disapro sale de pantalla
                    .filter(shot => !naves.find(nave => comparePosition(nave, shot))) //disapro golpea nave
                    .map(s => {
                        return {
                            top: s.top - 5, left: s.left
                        }
                    }))

            }, 10);
        /*
        
                naves.forEach((nave, iNave) => {
                    let iShot = shots.findIndex(shot => comparePosition(nave,shot))
                    if (iShot != -1) {
                        console.log("nave muerta", iNave,"disparo",iShot)
                    }
                });
                */

    }, [shots])


    function comparePosition(nave: NaveModel, shot: ShotModel) {
        let size = 34
        let compareTop = nave.top < shot.top && nave.top + size > shot.top
        let compareLeft = nave.left < shot.left && nave.left + size > shot.left
        return compareTop && compareLeft
    }

    return (

        <div className="background" style={{
            backgroundImage: "url(./img/galaga.gif)",
            height: "100vh"

        }}>


            <Nave up={up} left={left} />
            {
                shots.map(s => <Shoot up={s.top} left={s.left} />)
            }
            <div style={{
                position: "absolute",
            }}>


                {naves.map((nave, index) => {
                    return (

                        <Enemie up={nave.top} left={nave.left} />
                    )
                })
                }




            </div>
        </div>



    )

}

export default Galaga;
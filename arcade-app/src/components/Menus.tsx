import { Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { text } from "stream/consumers";
import Menu from "../models/Menu";
import MenuItem from "./MenuItem";


function Menus({ menus }: { menus: Menu[] }) {
  const [selected, setSelected] = useState(0);

  const handleKey = (e: KeyboardEvent) => {
    let { keyCode } = e;
    console.log(keyCode)
    switch (keyCode) {
      case 40: //abajo
        setSelected(actual => actual >= menus.length - 1 ? 0 : actual + 1)
        break;
      case 38: //arriba
        setSelected(actual => actual <= 0 ? menus.length - 1 : actual - 1)
        break;
      case 13:
        menus[selected].function()
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKey)

    return () => {
      window.removeEventListener("keydown", handleKey)
    }
  })

  return (
    <div style={{ margin: 2, padding: 2, }}>
      {menus.map((menu, index) => {
        return <MenuItem
          menu={menu}
          selected={index == selected}
        />

      })}
      {menus[selected].description &&
        <div className="etiqueta-container">

          <img className="etiqueta-img" src={menus[selected].description!.img} />
          <p
            style={{
              fontSize: selected ? "12px" : "12px",
              color: "white"


            }}>
            {menus[selected].description!.descripcion}
          </p>

        </div>
      }
    </div>
  )
}

export default Menus;
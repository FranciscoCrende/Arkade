import { useEffect, useState } from "react";
import Menu from "../model/Menu";
import MenuItem from "./MenuItem";

function Menus({menus }: {menus: Menu[] }){
    const navigate = useNavigate()
    const [selected, setSelected] = useState(-1);

  
    return (
      <div style={{ margin: 2, padding: 2, }}>
        <h4>Menus</h4>
        {menus.map((menu, index) => {
          return <MenuItem
            menu={{
              title: menu.title,
              link: menu.link,
              selected: index == selected
            }}
          />
        })}
      </div>
    )
}

function useNavigate() {
    throw new Error("Function not implemented.");
}

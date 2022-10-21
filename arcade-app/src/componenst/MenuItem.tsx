
import { height } from "@mui/system"
import { url } from "inspector"
import { useEffect, useLayoutEffect, useRef } from "react"
import Menu from "../models/Menu"


function MenuItem({ menu, selected }: { menu: Menu, selected: boolean }) {
  const { title } = menu
  const ref = useRef<HTMLDivElement>(null!)
  useLayoutEffect(() => {
    ref.current.focus()
  }, [])
  useEffect(() => {
    if (ref.current)
      if (selected) {
        console.log("", title, ": ", selected)
        ref.current.focus()
        console.log("focus: ", ref.current.focus())
      }
  }, [selected])
  return (
    <div
      ref={ref}
      className={selected ? "selected" : "unselected"}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"

      }}
      onFocus={() => console.log(title)}
    >
      {selected}

      <div style={{
        display: "flex",
        fontSize: selected ? "35px" : "30px",
        

      }}>
        <img className="imgPrincipal" src="http://localhost:3000/img/play.png" style={{ display: selected ? "block" : "none", width: 'auto', height: '17px', }} />

        {title}
      </div>
    </div>
  )
}

export default MenuItem
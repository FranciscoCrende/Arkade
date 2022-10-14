
import { useEffect, useLayoutEffect, useRef } from "react"
import Menu from "../models/Menu"


function MenuItem({ menu, selected }: { menu: Menu, selected: boolean }) {
  const { title} = menu
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
      onFocus={() => console.log(title)}
    >
      {selected}
      <div style={{
        display: "flex",
        fontSize: selected ? "35px" : "30px"
      }}>
        {title}
      </div>
    </div>
  )
}

export default MenuItem
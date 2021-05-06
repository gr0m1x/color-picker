import React from "react"
import "./Colors.css"

function Colors({setColorsIsShow, setColor}) {

  const colors = [
    {id: 1, color: "de1f2f", name: "red"},
    {id: 2, color: "e4ba34", name: "yellow"},
    {id: 3, color: "1ca054", name: "green"},
    {id: 4, color: "16afe8", name: "blue"}
  ]

  const setCurrentColor = (color) => {
    setColorsIsShow(false)
    setColor(color)
    window.localStorage.setItem("color", color)
  }

  return (
    <ul className="colors-list">
      {colors.map(item =>
        <li className="colors-list__item" key={item.id} onClick={() => setCurrentColor(item.color)}>
            <span className="colors-list__item-name">
              {item.name}
            </span>
          <span className="colors-list__item-color" style={{backgroundColor: `#${item.color}`}}/>
        </li>
      )}
    </ul>
  )
}

export default Colors;
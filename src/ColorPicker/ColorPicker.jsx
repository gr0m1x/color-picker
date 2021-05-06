import React, {useEffect, useState, useRef} from "react"
import './ColorPicker.css'
import Colors from "../Colors/Colors";
import ColorRange from "../ColorRange/ColorRange";
import ClickOutside from "../ClickOutside/ClickOutside";

function ColorPicker() {

  const colorsRef = useRef(null);

  const [colorsIsShow, setColorsIsShow] = useState(false)
  const [colorRangeIsShow, setColorRangeIsShow] = useState(false)
  const [currentColor, setCurrentColor] = useState("dadada")

  useEffect(() => {
    let selectedColor = window.localStorage.getItem("color")
    if (selectedColor) {
      setCurrentColor(selectedColor)
    }
  }, [])

  const setColor = (color) => {
    setCurrentColor(color)
  }

  const showColorsList = () => {
    if (!colorsIsShow) {
      setColorsIsShow(true)
      setColorRangeIsShow(false)
    } else  {
      setColorsIsShow(false)
    }
  }

  const showColorRange = () => {
    if (!colorRangeIsShow) {
      setColorRangeIsShow(true)
      setColorsIsShow(false)
    } else  {
      setColorRangeIsShow(false)
    }
  }

  return (
    <>
      <div className="color-picker">
        <div className="color-picker__body">
            <span className="current-hex">
              #{currentColor}
            </span>
          <div className="current-color__body"  onClick={showColorRange}>
            <div className="current-color"
                 style={{backgroundColor: `#${currentColor}`}}
            />
          </div>

          <div className={`colors ${colorsIsShow ? "active" : ""}`}  onClick={showColorsList} ref={colorsRef}>
            <svg className="colors__icon">
              <use xlinkHref="#icon__arrow-down"/>
            </svg>
            {colorsIsShow &&
              <Colors setColorsIsShow={setColorsIsShow} setColor={setColor}/>
            }
            <ClickOutside refTarget={colorsRef} callBack={() => setColorsIsShow(false)}/>
          </div>

          {colorRangeIsShow
            ?  <ColorRange
              setColorRangeIsShow={setColorRangeIsShow}
              currentColor={currentColor}
              setColor={setColor}
            />
            : null
          }
        </div>
      </div>
    </>
  )
}

export default ColorPicker;
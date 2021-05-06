import React, {useEffect, useRef, useState} from "react"
import "./ColorRange.css"
import ClickOutside from "../ClickOutside/ClickOutside";
import ColorRangeItem from "./ColorRangeItem";

function ColorRange({setColorRangeIsShow, currentColor, setColor}) {
  const ref = useRef(null);

  const [redColor, setRedColor] = useState(null)
  const [greenColor, setGreenColor] = useState(null)
  const [blueColor, setBlueColor] = useState(null)

  useEffect(() => {
    let rgb = currentColor.match(/.{1,2}/g)
    rgb.forEach((i, n) => {
        if (n === 0) {
          setRedColor(parseInt(i, 16))
        } else if (n === 1) {
          setGreenColor(parseInt(i, 16))
        } else if (n === 2) {
          setBlueColor(parseInt(i, 16))
        }
      }
    )
  }, [currentColor])


  const rgbToHex = (value) => {
    let hexValue = Number(value).toString(16)
    if (hexValue.length > 1) {
      return hexValue
    } else {
      return "0" + hexValue
    }
  }

  const generateHex = (red , green, blue) => {
    return rgbToHex(red) + rgbToHex(green) + rgbToHex(blue)
  }

  const cancelColor = () => {
    setColorRangeIsShow(false)
    setColor(window.localStorage.getItem("color"))
  }


  const changeColor = (value, color) => {
    switch (color) {
      case "red":
        setRedColor(value);
        setColor(generateHex(value, greenColor, blueColor))
        break;
      case "green":
        setGreenColor( value);
        setColor(generateHex(redColor, value, blueColor))
        break;
      case "blue":
        setBlueColor(value);
        setColor(generateHex(redColor, greenColor , value))
        break;
      default:
        break;
    }
  }

  const setNewColor = () => {
    let newColor = generateHex(redColor, greenColor , blueColor)
    window.localStorage.setItem("color", newColor)
    setColor(newColor)
    setColorRangeIsShow(false)
  }

  return (
    <div className="color-range" ref={ref}>
      {redColor !== null && greenColor !== null && blueColor !== null &&
        <>
          <ul className="color-range__list">
            <ColorRangeItem colorValue={redColor} type="red" callBack={changeColor}/>
            <ColorRangeItem colorValue={greenColor} type="green" callBack={changeColor}/>
            <ColorRangeItem colorValue={blueColor} type="blue" callBack={changeColor}/>
          </ul>
          <div className="color-range__btn-box">
            <button className="btn" onClick={cancelColor}>Cancel</button>
            <button className="btn btn--green" onClick={setNewColor}>Ok</button>
          </div>
        </>
      }

      <ClickOutside refTarget={ref} callBack={cancelColor}/>
    </div>
  )
}

export default ColorRange;
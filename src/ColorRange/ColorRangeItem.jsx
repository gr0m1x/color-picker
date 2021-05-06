import React from "react"

function ColorRangeItem({colorValue, callBack, type}) {
  return (
    <label className="color-range__item">
      {type.charAt(0)}
      <input type="range" min={0} max={255} value={colorValue}
             onChange={(e) => callBack(e.target.value, type)}
             style={{background: `linear-gradient(to right, ${type}, #00000095`}}
      />
    </label>
  )
}

export default ColorRangeItem;
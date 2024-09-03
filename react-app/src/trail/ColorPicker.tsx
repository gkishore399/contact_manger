import React, { useState } from "react";

function ColorPicker() {
  const [color, setcolor] = useState("");
  function handleColor(e: any) {
    setcolor(e.target.value);
  }
  return (
    <div>
      <h1>color-picker</h1>
      <div style={{ background: color }}>
        <h3>selected color</h3>
      </div>
      <label>select color:</label>
      <input type="color" onChange={handleColor}></input>
    </div>
  );
}

export default ColorPicker;

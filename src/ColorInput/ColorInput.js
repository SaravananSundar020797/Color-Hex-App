import React from "react";
import "./ColorInput.css";
import colorNames from "colornames";

const ColorInput = ({colorValue,setColorValue,setHexValue,darkText,setDarkText}) => {
  return (
    <main className="colorInput">
      <form className="" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" className="inputColor" placeholder="Enter Your fav color ..." value={colorValue} onChange={(e)=>{setColorValue(e.target.value);setHexValue(colorNames(e.target.value))}}/>
        <div>
          <button type="button" onClick={() => setDarkText(!darkText)}>Toggle Text Color</button>
        </div>
      </form>
    </main>
  );
};

export default ColorInput;

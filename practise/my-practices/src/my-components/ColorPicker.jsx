import { useState } from "react";

export const ColorPicker = () => {

    const [color, setColor] = useState("#070707");

    const pickColor = (e)=>{
        setColor(e.target.value);
    }

    let styleP = {
        backgroundColor: color,
        color: "white",
        width: "15rem",
        height: "15rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

  return (
    <div className="m-3 p-3 border d-flex flex-column align-items-center">
        <p style={styleP}>Selected Color: {color}</p>
        <input type="color" className="m-3 w-25" id="color" onChange={pickColor}/>
        <label htmlFor="color">Pick a Color</label>
    </div>
  )
}

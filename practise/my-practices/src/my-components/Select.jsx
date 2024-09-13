import { flowers } from "../assets/flowers.js";
import { flowers2 } from "../assets/flowers-2.js";
import { useState } from "react";

export const Select = () => {

    let flowersArray = [...flowers, ...flowers2];

    const flowerNames = flowersArray.map((flower)=><option key={flower} value={flower.url}>{flower.name}</option>)

    let [imgUrl, setImgUrl] = useState(flowers[0].url);

    const getImage = (event)=>{
        setImgUrl(event.target.value);
        console.log(imgUrl);
    }

  return (
    <section className="container d-flex flex-column align-items-center">
        <select className="form-select fs-5 m-3 w-75" onChange={getImage}>
            <option>-- Select a flower --</option>
            {flowerNames}
            
        </select>
        <img src={imgUrl} alt="" width="250" height="250" className="m-2 rounded"/>
    </section>
  )
}




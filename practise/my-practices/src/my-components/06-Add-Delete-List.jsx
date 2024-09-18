import {useState, useRef} from 'react';
import { FaLongArrowAltUp, FaLongArrowAltDown, FaTrashAlt } from "react-icons/fa";


export const AddDeleteList = () => {

    let inputElement = useRef();

    let [liItems, setLiItems] = useState([]);
    let [display, setDisplay] = useState("d-none");
    let [oldLiItems, setOldLiItems] = useState([]);
    let [display2, setDisplay2] = useState("d-none");

    // addItem
    const addItem = (event)=>{
        let inputVal = event.target.previousElementSibling.value;
        if(inputVal.trim()){
            setLiItems([...liItems, inputVal]);
        }
        
        inputElement.current.value = "";
        inputElement.current.focus();
    }

    // clearItems
    const clearItems = ()=>{
        setOldLiItems(liItems);
        setLiItems([]);

        setDisplay("d-block");
        setTimeout(()=>setDisplay("d-none"), 4000);
    }

    // deleteItem
    const deleteItem = (i)=>{
        setOldLiItems(liItems);
        setLiItems(liItems.filter((item)=>liItems.indexOf(item) != i));

        setDisplay("d-block");
        setTimeout(()=>setDisplay("d-none"), 4000);

    }

    // upItem
    const upItem = (i)=>{
        if(i > 0){
            let newItems = [...liItems];
            newItems.splice(i-1, 0, liItems[i]);
            newItems.splice(i+1, 1);
            setLiItems(newItems);
        }
    }

    // downItem
    const downItem = (i)=>{
        if(i < liItems.length - 1){
            let newItems = [...liItems];
            newItems.splice(i+2, 0, liItems[i]);
            newItems.splice(i, 1);
            setLiItems(newItems);
        }
    }

    // undo
    const undo = ()=>{
        setLiItems(oldLiItems);

        setDisplay("d-none");
        setDisplay2("d-block");
        setTimeout(()=>setDisplay2("d-none"), 4000);
    }

    let style = 'border bg-success text-light p-2 rounded position-absolute';

  return (
    <div className='m-3'>
        <div className={`d-flex justify-content-center ${display}`}>
            <p className={style}>Silme işlemi gerçekleştirildi. <u style={{cursor:"pointer"}} onClick={undo}>Geri al</u></p>
        </div>

        <div className={`d-flex justify-content-center ${display2}`}>
            <p className={style}>✅ İşlem geri alındı.</p>
        </div>
        
        <input type="text" className='m-1 p-1 rounded' ref={inputElement} />
        <button className='m-1 p-1 rounded' onClick={addItem}>Add</button>
        <button className='m-1 p-1 rounded' onClick={clearItems}>Clear</button>
        <ul>
            {liItems.map((item, index)=>{
                return <li key={index}>
                            <span>{item}</span>
                            <FaLongArrowAltUp className='m-1 p-1 text-info bg-success h4' onClick={()=>upItem(index)}/>
                            <FaLongArrowAltDown className='m-1 p-1 text-info bg-success h4' onClick={()=>downItem(index)}/>
                            <FaTrashAlt className='m-1 p-1 text-light bg-danger h4' onClick={()=>deleteItem(index)}/>
                       </li>
                })}
        </ul>
    </div>
  )
}

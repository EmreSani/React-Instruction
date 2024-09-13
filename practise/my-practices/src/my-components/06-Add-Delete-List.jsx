import {useState} from 'react';
import { FaLongArrowAltUp, FaLongArrowAltDown, FaTrashAlt } from "react-icons/fa";


export const AddDeleteList = () => {

    let [liItems, setLiItems] = useState([]);

    // addItem
    const addItem = (event)=>{
        let inputVal = event.target.previousElementSibling.value;
        if(inputVal.trim()){
            setLiItems([...liItems, inputVal]);
        }
        
        document.querySelector("input").value = "";
        document.querySelector("input").focus();
    }

    // clearItems
    const clearItems = ()=>{
        setLiItems([]);
    }

    // deleteItem
    const deleteItem = (i)=>{
        setLiItems(liItems.filter((item)=>liItems.indexOf(item) != i));
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

    let style = 'border bg-success text-light p-2 rounded position-absolute';

  return (
    <div className='m-3'>
        <div className='d-flex justify-content-center d-none'>
            <p className={style}>Silme işlemi gerçekleştirildi. <u style={{cursor:"pointer"}}>Geri al</u></p>
        </div>
        
        <input type="text" className='m-1 p-1 rounded' id="" />
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

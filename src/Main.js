import React from "react";
import { useState } from "react";
// import {FaTrash} from 'react-icons/fa'
const Main = ()=>{

    const  [items,setItems]=useState([
        { id:1,checked:true,item:"To Read"},
        { id:2,checked:false,item:"To Sleep"},
        { id:3,checked:true,item:"To Dance"}
    ])

    function deleteItem(index){
        const newItems = items.filter((item,i)=>{
            if(index!==i){
                return item
            }
        })
        setItems(newItems)
    }

    function handleCheck(index){
        const newItems = items.map((value,i)=>{
            if(index===i){
                return {...value,checked:!value.checked}
            }
            else{
                return value
            }
        })
        console.log(newItems);
        setItems(newItems)
    }
    return (
        <main>
            <ul>
               {
                    items.map((item,index)=>{
                        return (
                            <li key={index}>
                                <input type="checkbox" checked={item.checked} onChange={()=>handleCheck(index)}></input>
                                <label>{item.item}</label>
                               <button onClick={()=>deleteItem(index)}>Del</button>
                            </li>
                        )
                    })
               }
            </ul>
        
        </main>
    )
}

export default Main;
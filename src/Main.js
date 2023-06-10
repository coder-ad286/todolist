import React from "react";
import Lists from "./Lists";
// import {FaTrash} from 'react-icons/fa'
const Main = ({items,handleCheck,deleteItem})=>{

    
    return (
        <main>
            <ul>
               {
                    items.map((item,index)=>{
                        return (
                            <Lists item={item} 
                                   index={index}
                                   handleCheck={handleCheck}
                                   deleteItem={deleteItem}
                            />
                        )
                    })
               }
            </ul>
        
        </main>
    )
}

export default Main;
import React from "react";
import Lists from "./Lists";
// import {FaTrash} from 'react-icons/fa'
const Main = ({items,handleCheck,deleteItem})=>{

    
    return (
        <main>
            {items.length > 0 ? (
                <ul>
                {
                     items.map((item,index)=>{
                         return (
                             <Lists 
                                    key={index}
                                    item={item} 
                                    index={index}
                                    handleCheck={handleCheck}
                                    deleteItem={deleteItem}
                             />
                         )
                     })
                }
             </ul>
            ):(
                <h1>No Items to Display</h1>
            )}
        
        </main>
    )
}

export default Main;
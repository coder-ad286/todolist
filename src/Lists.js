import React from 'react'

const Lists = ({item,index,handleCheck,deleteItem}) => {
  return (
    <li key={index}>
        <input type="checkbox" checked={item.checked} onChange={()=>handleCheck(index)}></input>
        <label>{item.item}</label>
        <button onClick={()=>deleteItem(index)}>Del</button>
    </li>
                                
  )
}

export default Lists
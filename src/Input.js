import React from 'react'

export const Input = ({newItem,setNewItem,handleSubmit}) => {

    
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Task..'  value={newItem}onChange={(e)=>setNewItem(e.target.value)} required/>
        <button type="submit">Submit</button>
    </form>
  )
}

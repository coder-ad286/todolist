import Footer from "./Footer";
import Header from "./Header";
import { Input } from "./Input";
import Main from "./Main";
import { useState } from "react";

function App() {

  const title = "To Do List"
  const localItems = JSON.parse(localStorage.getItem("items"))
  const  [items,setItems]=useState(localItems!==null ? localItems : [])

function deleteItem(index){
    const newItems = items.filter((item,i)=>{
        if(index!==i){
            return item
        }
    })
    setItems(newItems)
    localStorage.setItem("items",JSON.stringify(newItems))

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
    setItems(newItems)
    localStorage.setItem("items",JSON.stringify(newItems))
}

const [newItem,setNewItem]= useState('')

function handleSubmit(e){
    e.preventDefault();
    const newItemObj = {
       checked : false,
       item : newItem
    }

    setItems([...items,newItemObj])
    setNewItem('')
    localStorage.setItem("items",JSON.stringify([...items,newItemObj]))
    console.log("Submited");
}
  return (
    <div className='app'>
      <Header title={title}/>
      <Input 
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
      />
      <Main 
           items={items}
           handleCheck={handleCheck}
           deleteItem={deleteItem}
      />
      <Footer 
            length={items.length}
      />
    </div>
  );
}

export default App;

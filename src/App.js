import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {

  const title = "To Do List"

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
    setItems(newItems)
}
  return (
    <div className='app'>
      <Header title={title}/>
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

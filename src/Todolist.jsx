import {React,useState} from 'react'

function Todolist() {

  const [item,setnewitem]=useState("");
  return (
    <form>
      <input type="text" value={item} onChange={(a)=>{setnewitem(a.target.value); console.log(a)}} />
    </form>
  )
}

export default Todolist

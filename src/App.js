import { useState } from 'react';
import './App.css';

const App=()=>{
  const [userInput,setUserInput] = useState("")
  const [toDos,setToDos] = useState([])
  const addData=()=>{
    setToDos([...toDos,userInput])
  }
  return (
    <div>
      <h1>To Do List</h1>
      <input onChange={(event)=>setUserInput(event.target.value)} type="text"></input>
      <button onClick={()=>addData()}>Add</button>
      <ul>
        {
          toDos.map((toDo)=><li>{toDo}</li>)
        }
      </ul>
    </div>
  );
}

export default App;

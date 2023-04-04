import './App.css';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addText, deleteText, deletAll } from './counterSlice'

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  return (
    <div className="App">
        <div>
          <input onChange={(el)=> setText(el.target.value)}/>
          <button onClick={() => dispatch(addText(text))}>Add</button>
          <button onClick={() => dispatch(deletAll())}>deletAll</button>
          {count.todolist.map((value, index)=> {
            return(
              <div className='list' key={index}>
                {value}
                <button className='delete' onClick={() => dispatch(deleteText(index))}>delete</button>
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default App;

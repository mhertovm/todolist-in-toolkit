import { createSlice } from '@reduxjs/toolkit'
  
  const initialState = {
    value: 0,
    todolist : []
  }

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addText: (state, action)=> {
            if(action.payload !== ""){
               state.todolist.push(action.payload) 
            } 
        },
        deleteText: (state, action)=> {
            state.todolist.splice(action.payload, 1)
        },
        deletAll: (state)=> {
            state.todolist = []
        }
    }

})

export const {addText, deleteText, deletAll} = counterSlice.actions
export default counterSlice.reducer
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, clearAllItems } from './features/todoSlice'


function toDoList() {
    const items = useSelector((state) => 
        // console.log("state", state)
        state.todos.items  )
    const dispatch = useDispatch()
    const [input, setInput] = useState([])

    const displayToDo = items.map((item, index) => <li key={index} onClick={() => dispatch(removeItem(index))}>{item}</li>)

    const hitSubmit = (e) => {
        e.preventDefault()
    store.dispatch(addItem(input))
    console.log(store.getState())
    }
    return (
        <div>
            <form onSubmit={(e) => hitSubmit(e)}>
                <input type="text" placeholder = 'new to do list items here!' onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {displayToDo}
            </ul>
            <button onClick={() => dispatch(clearAllItems())}>Clear All</button>
        </div>
    )
}

export default toDoList

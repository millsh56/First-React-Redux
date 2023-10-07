import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem, clearAllItems } from './features/todoSlice'


function ToDoList() {
    const items = useSelector((state) => 
        // console.log("state", state)
        state.items  )
    const dispatch = useDispatch()
    const [input, setInput] = useState([])

    const displayToDo = items && items.map((item) => <li onClick={() => dispatch(removeItem(item))}>{item}</li>)

    const hitSubmit = (e) => {
        e.preventDefault()
        dispatch(addItem(Text(input)))
   
    }
    return (
        <div>
            <form>
                <input type="text" placeholder = 'new to do list items here!' onChange={(e) => setInput(e.target.items)} />
                <button type="submit" onSubmit={(e) => hitSubmit(e)}>Submit</button>
            </form>
            <ul>
                {displayToDo}
            </ul>
            <button onClick={() => dispatch(clearAllItems())}>Clear All</button>
        </div>
    )
}

export default ToDoList

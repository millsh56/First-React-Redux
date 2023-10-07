const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addItem: (state, action) => {
            return {items: [...state.value, action.payload] }
        },
        removeItem: (state) => {
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(idnex, 1)
                return { items: array }
            }
        },
        clearAllItems: () => {
            return { items: array }
        }
    }
})

export const { addItem, removeItem, clearAllItems } = todoSlice.actions

export default todoSlice.reducer
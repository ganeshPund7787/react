import { createSlice, nanoid } from "@reduxjs/toolkit";


// const intialstate = () => {

// }

export const todoSlice = createSlice({
    name: "todo",
    todos: [{ id: 1, text: "hello Pratik" }],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                test: action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
            (todo.id === action.payload ?
                state.todos.push({ text: action.payload }) :
                state.todos))
        }
    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer


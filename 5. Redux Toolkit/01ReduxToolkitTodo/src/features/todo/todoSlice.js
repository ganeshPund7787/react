
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}
export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload,
                complete: false,
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
            (todo.id === action.payload.todo.id ?
                { ...todo, todo: action.payload.todo } : todo))
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((todo) =>
            (todo.id === action.payload ?
                { ...todo, complete: !todo.complete } : todo))
        },

    }
})


export const { addTodo, removeTodo, updateTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer



import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        todo: "1st todo",
        complete: false,
    }]
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
                isEditable: false,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) =>
                todo.id !== action.payload
            )
        },
        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) =>
        //     (todo.id === action.payload ?
        //         state.todos.push({ text: action.payload }) :
        //         state.todos))
        // }
    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer


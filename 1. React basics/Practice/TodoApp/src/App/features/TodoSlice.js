import { createSlice, nanoid } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast";

const initialState = {
    todos: []
}

const TodoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                todo: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },

        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ?
                    { ...todo, completed: !todo.completed }
                    : todo
            )
        },

        removeTodo: (state, action) => {
            state.todos =
                state.todos.filter(
                    (todo) =>
                        todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id ?
                    { ...todo, todo: action.payload.todo }
                    : todo
            )
        },

        toastError: (state, action) => {
            toast.error(action.payload, {
                duration: 2000,
                style: {
                    color: "white",
                    background: "#000",
                },
            });
        }
    }
})

export const { addTodo, toggleTodo, removeTodo, updateTodo, toastError } = TodoSlice.actions;

export default TodoSlice.reducer;

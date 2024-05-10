import { configureStore } from "@reduxjs/toolkit"
import TodoReducers from "./features/TodoSlice"

export const store = configureStore({
    reducer: TodoReducers
})
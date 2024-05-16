import { configureStore } from "@reduxjs/toolkit"
import CardReducers from "./features/CardSlice"

export const store = configureStore({
    reducer: CardReducers
})
import { configureStore } from "@reduxjs/toolkit"
import productReducers from "../app/Product/productSlice"
export const store = configureStore({
    reducer: {
        products: productReducers
    }
})
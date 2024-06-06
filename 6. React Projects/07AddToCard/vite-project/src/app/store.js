import { configureStore } from "@reduxjs/toolkit"
import productReducers from "../app/Product/productSlice"
import userRediucers from "../app/User/userSlice"

export const store = configureStore({
    reducer: {
        products: productReducers,
        users: userRediucers
    }
})
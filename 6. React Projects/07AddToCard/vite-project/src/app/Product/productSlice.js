import { createSlice } from "@reduxjs/toolkit"
import { Products } from "../../data.js"

const initialState = {
    Products,
    CartItems: []
}


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const addCard = state.Products.filter((card) => card.id === action.payload)
            state.CartItems.push(...addCard);
        }
    }
})

export const { addToCart } = productSlice.actions;

export default productSlice.reducer
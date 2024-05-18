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

            state.CartItems.forEach((element) => {
                if (element.id === action.payload) {
                    element.addToCard = !element.addToCard
                    element.quantity += 1
                    element.totalPrice = element.price * element.quantity
                }
            })
        },
        removeFromAdd: (state, action) => {
            state.CartItems = state.CartItems.filter((card) => card.id != action.payload)

            state.Products.forEach((element) => {
                if (element.id === action.payload) {
                    element.addToCard = !element.addToCard
                }
            })
        },
        addQuantity: (state, action) => {
            state.CartItems.forEach((element) => {
                if (element.id === action.payload) {
                    element.quantity += 1;
                    element.totalPrice = element.price * element.quantity
                }
            })
        },
        removeQuantity: (state, action) => {
            state.CartItems.forEach((element) => {
                if (element.id === action.payload && element.quantity > 1) {
                    element.quantity -= 1;
                    element.totalPrice -= element.price
                }
            })
        }
    }
})

export const { addToCart, removeFromAdd, addQuantity, removeQuantity } = productSlice.actions;

export default productSlice.reducer
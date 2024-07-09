import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: localStorage.getItem("currentUser") ?
        JSON.parse(localStorage.getItem("currentUser")) : null,
    loading: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
        },
        fetchFail: (state) => {
            state.currentUser = null;
            state.loading = false;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            localStorage.setItem("currentUser", JSON.stringify(action.payload))
        },
    }
})



export const { fetchFail, fetchStart, fetchSuccess } = userSlice.actions;

export default userSlice.reducer;
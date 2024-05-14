import { configureStore } from "@reduxjs/toolkit";
import TodoReducers from "./TodoSlice";

const store = configureStore({
  reducer: TodoReducers,
});

export default store;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todoMsg: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },

    deletTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todoMsg: action.payload.todoMsg }
          : todo
      );
    },
  },
});

export const { addTodo, deletTodo, toggleTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodos = () => {
  const [input, setInput] = useState("");
  const disptach = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();
    disptach(addTodo());
    setInput("");
  };

  return (
    <form onSubmit={addToDoHandler} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="placeholder-black ::placeholder w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-cyan-500/20 py-1.5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};
export default AddTodos;

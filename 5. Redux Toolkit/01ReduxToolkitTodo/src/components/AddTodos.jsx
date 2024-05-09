import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";
function TodoForm() {
  const [input, setInput] = useState("");

  const disptach = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    disptach(addTodo(input));
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;

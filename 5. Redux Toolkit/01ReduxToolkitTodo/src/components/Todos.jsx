import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import {} from "../features/todo/todoSlice";

const Todos = () => {
  try {
    const todos = useSelector((state) => state.todos);
    const disptach = useDispatch();

    return (
      <>
        <div> Todos</div>

        {todos.map((todo) => {
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => disptach(removeTodo(todo.id))}>X</button>
          </li>;
        })}
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Todos;

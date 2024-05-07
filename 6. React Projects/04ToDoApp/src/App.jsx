import { useEffect, useState } from "react";
import TodoProvider from "./Context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const speaker = (music) => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = music;
    window.speechSynthesis.speak(speech);
  };

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    speaker("Add toodoo");
  };

  const updateTodo = (id, todo) => {
    setTodos((pre) =>
      pre.map((preTodo) => (preTodo.id === id ? todo : preTodo))
    );
    speaker("Update Toodoo");
  };

  const deleteTodo = (id) => {
    setTodos((pre) => pre.filter((todo) => todo.id !== id));
    speaker("Delete Toodoo");
  };

  const toggleComplete = (id) => {
    setTodos((pre) =>
      pre.map((preTodo) =>
        preTodo.id === id
          ? { ...preTodo, completed: !preTodo.completed }
          : preTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#a63ac7] min-w-full min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Check Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

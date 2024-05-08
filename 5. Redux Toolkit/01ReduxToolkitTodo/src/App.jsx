import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold  m-3">Task List </h1>
      <AddTodos />
      <Todos />
    </>
  );
}

export default App;

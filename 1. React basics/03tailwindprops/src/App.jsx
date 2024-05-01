import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const myObj = {
    name: "Ganesh",
    age: 19,
    class: "BCA",
  };
  return (
    <>
      <h1 className="bg-red-500 text-black rounded-xl p-4 text-5xl">
        Hellow !
      </h1>
      <Card goal="Fullstack Devolper" newObj={myObj} />
      <Card />
    </>
  );
}

export default App;

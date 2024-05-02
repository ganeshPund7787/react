import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import { Data } from "./data.js";

function App() {
  return (
    <>
      <h3 className="text-pink-600 rounded-xl p-4 text-4xl font-medium">
        Friend Circle Profile's
      </h3>
      <div className="flex flex-wrap justify-center">
        {Data.map((user) => (
          <Card newUser={user} key={Math.random()} />
        ))}
      </div>
    </>
  );
}

export default App;

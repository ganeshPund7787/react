import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");
  useEffect(() => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = color;
    window.speechSynthesis.speak(speech);
  }, [color]);
  return (
    <div
      className="w-full h-screen duration-20 flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="inset-x-0 px-2 flex justify-center items-center ">
        <div className="rounded-2xl flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 text-black shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);

  const addvalue = () => {
    if (counter < 20) {
      const ans = setCount(counter + 1);
    } else {
      alert("You can count only 20");
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCount(counter - 1);
    } else {
      alert("You cannot count negative number");
    }
  };

  const clearValue = () => {
    counter = 0;
    setCount(counter);
  };

  return (
    <>
      <h1 className="heading">Chai aur react </h1>
      <h2>counter : {counter}</h2>

      <button className="increase" onClick={addvalue}>
        increase
      </button>
      <br />
      <br />
      <button className="decrease" onClick={removeValue}>
        decrease
      </button>
      <br />
      <br />
      <button className="clearValue" onClick={clearValue}>
        clear Value
      </button>
    </>
  );
}

export default App;

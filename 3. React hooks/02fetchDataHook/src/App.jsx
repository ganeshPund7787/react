import React, { useEffect, useState } from "react";
import useFetch from "./Hooks/useFetch";

const App = () => {
  const [joke, setJoke] = useState(null);
  const [btnText, setBtnText] = useState("Genrate Joke");
  const data = useFetch({ joke });

  return (
    <div>
      <h1>{joke}</h1>
      <button
        onClick={() => {
          setJoke(data);
          setBtnText("Change Joke");
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default App;

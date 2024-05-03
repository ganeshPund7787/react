import React from "react";
import useData from "./Hooks/useData";

const App = () => {
  const data = useData({ value: "Parshu" });
  return <div>{data}</div>;
};

export default App;

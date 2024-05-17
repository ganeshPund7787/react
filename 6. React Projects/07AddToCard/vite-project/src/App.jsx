import React from "react";
import Card from "./components/Card";
import { useSelector } from "react-redux";

const App = () => {
  const { Products } = useSelector((state) => state.products);

  return (
    <div className="flex flex-wrap space-x-3 space-y-3 justify-center items-center">
      {Products.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
  );
};

export default App;

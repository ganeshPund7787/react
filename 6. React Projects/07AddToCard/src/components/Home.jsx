import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
const Home = () => {
  const cards = useSelector((state) => state.cards);
  console.log(cards);
  return (
    <>
      <div className="flex justify-normal">
        {cards.map((card) => (
          <div key={card.name}>
            <Card card={card} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

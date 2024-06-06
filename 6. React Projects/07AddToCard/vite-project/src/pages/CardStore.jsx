import React from "react";
import { useSelector } from "react-redux";
import AddedCards from "./AddedCards";

const CardStore = () => {
  const { CartItems } = useSelector((state) => state.products);
  console.log(CartItems);
  return (
    <>
      <div className="text-start px-5 py-5 text-2xl font-bold">
        Collection :-
      </div>
      <div className="flex flex-wrap gap-5">
        {CartItems.map((item) => (
          <div key={item.id}>
            <AddedCards product={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardStore;

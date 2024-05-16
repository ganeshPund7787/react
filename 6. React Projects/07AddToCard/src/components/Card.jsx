import { MdShoppingBasket } from "react-icons/md";
import React, { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const Card = ({ card }) => {
  const [count, setCount] = useState(0);

  const addToCard = () => {
    setCount(count + 1);
    console.log("working");
    console.log(pre);
  };
  return (
    <div key={card.name} className="group relative mx-8">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
        <img
          src={card.imageSrc}
          alt="demo"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <a href={card.href}>
          <span className="absolute inset-0" />
          {card.name}
        </a>
      </h3>
      <p className="text-base font-semibold text-gray-900">
        {card.description}
      </p>
      <div className="flex justify-center m-5 rounded-[0.5rem] bg-slate-200">
        <button
          onClick={() => addToCard()}
          className="p-2 bg-green-400 m-2 rounded-2xl"
        >
          <IoIosAdd onClick={addToCard} />
        </button>
        <div className="p-2">{count}</div>
        <button className="p-2 bg-red-400 m-2 rounded-2xl">
          <IoIosRemove />
        </button>
      </div>
      <div className="flex justify-center">
        <MdShoppingBasket size={"20"} />
      </div>
    </div>
  );
};

export default Card;

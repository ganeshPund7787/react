import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/Product/productSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const { CartItems } = useSelector((state) => state.products);
  console.log(CartItems);
  const handleclick = () => {
    dispatch(addToCart(product.id));
  };
  return (
    <div className="h-[22rem] py-3 px-3 bg-slate-200">
      <div className="h-[14rem]">
        <img
          src={product.imageUrl}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
      </div>
      <div className=" flex justify-between p-[0.5rem]">
        <button
          onClick={handleclick}
          className="bg-green-400 px-4 py-1 rounded-lg"
        >
          Add
        </button>

        <button className="bg-red-600 px-4 py-1 rounded-lg">remove</button>
      </div>
      <div className="my-6">
        <button className="px-2 py-1 bg-yellow-400 w-full rounded-full">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;

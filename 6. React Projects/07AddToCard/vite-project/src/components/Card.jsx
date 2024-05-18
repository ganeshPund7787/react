import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/Product/productSlice";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(addToCart(product.id));
  };

  return (
    <div className="h-[22rem] py-3 px-4 my-5 bg-slate-100">
      <div className="h-[14rem]">
        <img
          src={product.imageUrl}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
      </div>
      <div className="mt-2 flex justify-center p-[0.5rem]">
        {product.addToCard ? (
          <button
            title="Go To Collection"
            className="disabled:cursor-text px-2 py-1 rounded-lg bg-indigo-500 text-white border-none"
          >
            <Link to={"/addToCard"}>Go to Card</Link>
          </button>
        ) : (
          <button
            onClick={handleclick}
            className="flex justify-between items-center px-2 w-full py-1 rounded-lg bg-orange-500 hover:bg-orange-400"
          >
            <p>Add </p>
            <p>
              <FaPlus />
            </p>
          </button>
        )}
      </div>

      <div className=" flex justify-center p-[0.5rem]">
        <button className="px-2 py-1 rounded-lg w-full bg-yellow-500 hover:bg-yellow-400">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Card;

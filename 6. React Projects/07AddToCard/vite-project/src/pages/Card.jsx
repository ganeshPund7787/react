import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/Product/productSlice";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import toast from "react-hot-toast";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div title={product.title} className="h-[24rem] w-[17rem] p-5 bg-slate-200">
      <div className="h-[14rem] ">
        <img
          src={product.imageUrl}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
      </div>
      <div className="flex mt-5 flex-col items-center justify-between">
        {product.addToCard ? (
          <button
            title="Go To Collection"
            className="w-[50%] px-2 py-1 rounded-lg bg-indigo-500 hover:bg-indigo-300 text-white border-none"
          >
            <Link to={"/addToCard"}>Go to Card</Link>
          </button>
        ) : (
          <button
            onClick={() => {
              toast.success(`Card Added`, {
                duration: 2000,
                style: {
                  backgroundColor: "#fff",
                },
              });
              dispatch(addToCart(product.id));
            }}
            className="w-[50%] mt-1 flex justify-between items-center px-2 py-1 rounded-lg bg-orange-500 hover:bg-orange-300"
          >
            <p>Add </p>
            <p>
              <FaPlus />
            </p>
          </button>
        )}

        <button className="w-[50%] mt-3 py-1 rounded-lg bg-yellow-500 hover:bg-yellow-300">
          Buy
        </button>
      </div>
      <div className="mt-2 text-sm text-end">⭐⭐⭐⭐⭐</div>
    </div>
  );
};

export default Card;

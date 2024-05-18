import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromAdd,
  addQuantity,
  removeQuantity,
} from "../app/Product/productSlice";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const AddedCards = ({ product }) => {
  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(removeFromAdd(product.id));
  };

  const addQuantityHandle = () => {
    dispatch(addQuantity(product.id));
  };

  const removeQuantityHandle = () => {
    dispatch(removeQuantity(product.id));
  };
  return (
    <div className="h-[25rem] py-3 px-4 my-5 mx-4 bg-slate-100">
      <div className="h-[14rem]">
        <img
          src={product.imageUrl}
          alt=""
          className="h-full w-full object-cover object-left-top"
        />
      </div>

      <div className="mt-2 py-2 w-full">
        <button className="px-2 py-1 rounded-lg w-full  bg-yellow-500">
          Buy
        </button>
      </div>

      <div>
        <ul className="mt-3 flex flex-col justify-evenly">
          <li>{`Price ${product.totalPrice} `}</li>
          <li>{`Quantity ${product.quantity} `}</li>
        </ul>
      </div>

      <div className="mt-2 flex justify-start gap-5 py-2">
        <button onClick={handleclick} className=" hover:text-red-500">
          <FaTrash />
        </button>

        <button onClick={addQuantityHandle} className="">
          <FaPlus />
        </button>

        <button onClick={removeQuantityHandle} className="">
          <FaMinus />
        </button>
      </div>
    </div>
  );
};
export default AddedCards;

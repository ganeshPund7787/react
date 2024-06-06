import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromAdd,
  addQuantity,
  removeQuantity,
} from "../app/Product/productSlice";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "react-hot-toast";

const AddedCards = ({ product }) => {
  const dispatch = useDispatch();

  const showMessage = (message) => {
    toast.success(message, {
      duration: 2000,
      style: {
        backgroundColor: "#fff",
      },
    });
  };

  return (
    <div className="h-[26rem] w-[17rem] p-5 bg-slate-200">
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
        <button
          onClick={() => {
            showMessage("Remove Card");
            return dispatch(removeFromAdd(product.id));
          }}
          className="hover:text-red-500"
        >
          <FaTrash />
        </button>

        <button
          onClick={() => {
            showMessage(`Add Quantity ${product.quantity + 1}`);
            dispatch(addQuantity(product.id));
          }}
          className="bg-orange-500 p-2 rounded-full"
        >
          <FaPlus />
        </button>
        {product.quantity}
        <button
          onClick={() => {
            showMessage(`Remove 1 Quantity}`);
            dispatch(removeQuantity(product.id));
          }}
          className="bg-orange-500 p-2 rounded-full"
        >
          <FaMinus />
        </button>
      </div>
    </div>
  );
};
export default AddedCards;

import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="sticky bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-indigo-600 text-2xl">GMart</h1>
        </Link>
        <ul className="flex gap-6 items-center">
          <Link to={"/"}>
            <li className="hover:text-indigo-600">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="hover:text-indigo-600">Shop</li>
          </Link>

          <Link to={"/about"}>
            <li className="hover:text-indigo-600">Services</li>
          </Link>

          <Link to={"/signin"}>
            <li className="hover:text-indigo-600"> Sign in</li>
          </Link>
          <Link to={"/addToCard"}>
            <li className="p-3 rounded-full hover:bg-slate-400">
              <FiShoppingCart />
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-3 bg-gray-300  flex justify-around">
      <div className="w-[70vw] flex justify-start">
        <h1>ganaShop</h1>
      </div>
      <div className="w-[30vw] flex justify-evenly">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/collection"}>collection</Link>
      </div>
    </div>
  );
};

export default Header;

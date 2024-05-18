import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold">GMart</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/addToCard"}>
            <li>🛒</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

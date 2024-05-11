import React from "react";
import { HashLink } from "react-router-hash-link";
import "../style/header.scss";

const Header = () => {
  return (
    <nav>
      <h1>Fun With React</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <HashLink to={"/contact/#"}>contact</HashLink>
        <HashLink to={"/services"}>services</HashLink>
      </main>
    </nav>
  );
};

export default Header;

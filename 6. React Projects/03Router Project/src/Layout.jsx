import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footers/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

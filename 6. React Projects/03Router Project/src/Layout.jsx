import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footers/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <>
      <Header />
      <Toaster />
      <Outlet />
      <Footer />
    </>
  );
}

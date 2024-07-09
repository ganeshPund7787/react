import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Signin from "../pages/Signin";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Outlet /> : <Signin />;
};

export default PrivateRoute;

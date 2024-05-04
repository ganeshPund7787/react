import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { id } = useParams();
  return (
    <>
      <h1 className="text-3xl text-center font-bold text-white bg-gray-500">
        User : {id}
      </h1>
    </>
  );
}

import React from "react";
import useUserContext from "./UserContext";

export const Profile = () => {
  const { user } = useUserContext();
  if (!user) return <h2>You should login first </h2>;

  return (
    <>
      <h1 className="m-5">User Profile </h1>
      <h2>Welcome: {user}</h2>
    </>
  );
};

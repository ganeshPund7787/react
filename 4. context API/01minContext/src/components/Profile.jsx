import React, { useContext } from "react";
import UserContext from "../context/UserContext.js";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  console.log(user.password);
  if (!user) return <div>You should login first</div>;

  return <div>Welcome {user}</div>;
}

export default Profile;

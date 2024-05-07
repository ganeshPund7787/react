import React, { useState } from "react";
import { UserContextProvider } from "./Components/UserContext";
import Login from "./Components/Login";
import { Profile } from "./Components/Profile";

const App = () => {
  const [user, setUser] = useState("");

  console.log(user);
  return (
    <UserContextProvider value={{ user, setUser }}>
      <h1 className="text-center text-3xl">Login form </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;

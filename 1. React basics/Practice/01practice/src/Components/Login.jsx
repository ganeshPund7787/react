import React, { useState } from "react";
import useUserContext from "./UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserContext();

  const setUserDetail = () => {
    setUser(username, password);
  };

  return (
    <div>
      <input
        placeholder="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setUserDetail()}>Submit</button>
    </div>
  );
};

export default Login;

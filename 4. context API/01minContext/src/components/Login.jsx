import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext.js";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username, password);
  };

  return (
    <>
      <div style={{ margin: "20px", padding: "10px" }}>Login</div>
      <input
        style={{ margin: "5px", padding: "10px" }}
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="username"
      />
      <br />
      <br />
      <input
        style={{ margin: "5px", padding: "10px" }}
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;

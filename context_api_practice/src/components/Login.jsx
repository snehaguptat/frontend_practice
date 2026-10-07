import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = () => {
    setUser({ username, password });
    navigate("/profile");
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="cursor-pointer bg-teal-500 px-4 py-1 rounded-lg text-white font-semibold "
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
};

export default Login;

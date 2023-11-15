import React, { useContext, useState } from "react";
import { login, storeToken } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { mutate: loginFn } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/profile");
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    loginFn();
  };

  return (
    <div className=" min-h-screen flex items-center justify-center absolute inset-0 z-[-1]  flex-row ">
      <div className="h-screen max-w-md w-full px-6 py-8  rounded-md shadow-md  ">
        <h2 className="text-3xl text-black font-semibold mb-6 h-56 grid grid-cols-3 gap-4 content-end">
          Login
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-black text-sm font-medium mb-2 "
            >
              username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-black text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

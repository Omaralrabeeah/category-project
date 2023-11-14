import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { register } from "../api/auth";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const handleChange = (e) => {
    if (e.target.name == "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.file[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const { mutate, isPending, error } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
  });

  return (
    <div className="w-screen h-screen bg-yellow-500 flex justify-center items-center">
      <div className="w-[50%] h-[50%] border-[2px] border-brown-500 rounded-md flex flex-col justify-center items-center gap-5">
        <h1 className="text-[30px] py-6"> Register</h1>
        <input
          name="username"
          onChange={handleChange}
          placeholder="Username"
          className="w-[70%] h-[50%] rounded-lg px-5 border-[2px] border-black"
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          className="w-[70%] h-[50%] rounded-lg px-5 border-[2px] border-black"
        />
        <input
          name="image"
          onChange={handleChange}
          type="file"
          placeholder="file"
          className="w-[70%] h-[50%] rounded-lg px-5 border-[2px] border-black py-2"
        />
        {isPending ? (
          <button
            disabled
            className="border-[2px] border-black px-5 rounded-md hover:pg-gray-300"
          >
            loading...
          </button>
        ) : (
          <button
            onClick={mutate}
            className="py-3 border border-black rounded-md border-[2px]"
          >
            Register
          </button>
        )}
        <h1 className="text-red-700">{error?.message}</h1>
      </div>
    </div>
  );
};

export default Register;

import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.name == "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const { mutate, isPending, error } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      navigate("/profile");
    },
  });

  return (
    <div className="w-screen h-screen bg-yellow-200 flex justify-center items-center">
      <img src="https://mytastycurry.com/wp-content/uploads/2018/06/Omelette-roll.jpg "></img>
      <div className="w-[50%] h-[50%] relative border-[2px] border-brown-500 rounded-md flex flex-col justify-center items-center gap-5 z-[10]">
        <img
          src="https://www.everydaycheapskate.com/wp-content/uploads/117517953_s-833x556.jpg"
          className="absolute h-full w-full z-[-1] "
        />
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
            className="py-3 border border-black rounded-md border-[2px] h-[20%] rounded-full bg-transparent hover:bg-black-500 text-black-500 font-semibold hover:text-white py-3"
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

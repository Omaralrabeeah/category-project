import React from "react";

const Register = () => {
  return (
    <div className="w-screen h-screen bg-blue-700-500 flex justify-center items-center">
      <div className="w-[50%] h-[50%] border-[2px] border-black rounded-md flex flex-col justify-center items-center gap-5">
        <h1 className="text-[30px]"> Register</h1>
        <input
          placeholder="username"
          className="w-[70%] h-[50%] rounded-lg px-5 border-[2px] border-black"
        />
        <input
          placeholder="password"
          className="w-[70%] h-[50%] rounded-lg px-5 border-[2px] border-black"
        />
        <input
          type="file"
          placeholder="file"
          className="w-[70%] h-[50%] rounded-lg px-5 border-[2px] border-black py-2"
        />
        <button className="py-5">Register</button>
      </div>
    </div>
  );
};

export default Register;

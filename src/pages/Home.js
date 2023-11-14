import React from "react";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-blue-700-500 flex justify-left items-center bg-red-500 md:bg-red-50 w-500 h-500 md:bg-brown-500  ">
      <div classname="relative">
        <img
          src="https://img.freepik.com/premium-photo/hand-holds-piece-homemade-pizza-yellow-background_175682-30592.jpg"
          class="h-screen w-screen absolute top-0"
          alt="..."
        ></img>
        <p className="absolute top-60 text-orange-900 text-2xl z-10 flex font-mono  font-bold text-8xl ... text-slate-300 left-9 ">
          Foodies
        </p>
        <p className="absolute top-65 text-3xl z-10 flex font-mono    text-base/6 ... text-orange-900 items-center  antialiased ... left-9  font-bold">
          {" "}
          Online, easy and beautiful.
        </p>

        <button className="absolute end rounded-full ... bg-transparent hover:bg-black-500 text-yellow-900 font-semibold hover:text-white py-3 px-6 border border-yellow-900 hover:border-transparent rounded absolute bottom-60 left-80 ...">
          login
        </button>
      </div>
    </div>
  );
};
export default Home;

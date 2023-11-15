import React from "react";

const Category = () => {
  return (
    <div className="w-screen h-screen bg-yellow-100 bg-cover bg-center ...">
      <div className="relative">
        <img
          src="https://mytastycurry.com/wp-content/uploads/2023/05/Amritsari-Paneer-Bhurji-.jpg"
          class=" absolute h-500 w-500 absolute top-0 shadow-2xl ...bg-indigo-500 opacity-75 ..."
          alt="..."
        ></img>

        <p className="absolute top-20 text-orange-900 text-0xl z-10 flex font-mono  font-bold text-7xl ... text-yellow-900 left-30 ">
          Categories
        </p>
        <div className="absolute top-48 bg-brown-900 box-border h-20 w-[50%] p-4 border-4 ... grid justify-items-center ... z+1000 rounded-lg ... ">
          <p className="font-mono  font-bold text-3xl ... text-yellow-900 left-30 ">
            {" "}
            HEALTHY
          </p>
        </div>
        <div className="absolute top-96 bg-brown-900 box-border h-20 w-[50%] p-4 border-4 ... grid justify-items-center ... z+1000 rounded-lg ... ">
          <p className="font-mono  font-bold text-3xl ... text-yellow-900 left-30">
            INDIAN
          </p>
        </div>
        <div className="absolute  bg-brown-900 box-border h-20 w-[50%] p-4 border-4 ... grid justify-items-center ... z+1000 rounded-lg ... ">
          <p className="font-mono  font-bold text-3xl ... text-yellow-900 left-30">
            KUWAITI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;

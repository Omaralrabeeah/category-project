import React from "react";

const Category = () => {
  return (
    <div className="w-screen h-screen  ">
      {/* <div className="relative">
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
      </div> */}
      <div className="flex flex-col w-full h-full gap-3">
        <div className=" flex justify-center items-center gap-5  h-[10%] w-full ">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn btn-neutral">Search</button>
        </div>
        <div className="h-[90%] w-full  flex flex-wrap gap-5 justify-center">
          {/* START CARD */}
          <div className="card card-compact w-96 bg-base-100 shadow-xl h-[400px]">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>

          {/* END CARD */}
        </div>
      </div>
    </div>
  );
};

export default Category;

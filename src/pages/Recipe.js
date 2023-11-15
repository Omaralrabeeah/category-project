import React from "react";
import { getAllRecipe } from "../api/recipe";
import { useQuery } from "@tanstack/react-query";

const Recipe = () => {
  const { data: recipes } = useQuery({
    queryKey: ["Recipes"],
    queryFn: getAllRecipe,
  });
  console.log(recipes);
  const recipeList = recipes?.map((recipe) => {
    return (
      <div className="card w-96 bg-base-100 shadow-xl h-[400px]">
        <figure>
          <img
            src={`http://localhost:8000/${recipe.image}`}
            alt="lazanya"
            onError={({ currentTarget }) => {
              currentTarget.src =
                "https://i.lezzet.com.tr/images-xxlarge/kiymali-lazanya-56bc5796-3257-40eb-8a8d-714976888858";
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {recipe.name}
            <div className="badge badge-secondary">{recipe.user?.username}</div>
          </h2>
          <p>{recipe.ingredients}</p>
          <div className="card-actions justify-end">
            {recipe.categories?.map((category) => {
              return (
                <div className="badge badge-outline">
                  {category.categoryname}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

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

          {recipeList}

          {/* END CARD */}
        </div>
      </div>
    </div>
  );
};

export default Recipe;

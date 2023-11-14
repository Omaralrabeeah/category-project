import React from "react";

const Home = () => {
  return (
    
    <div className="w-screen h-screen  flex justify-left items-center  w-500 h-500 md:bg-yellow-200 text-right ...">
      <div classname="relative">
          <img
          src="https://mytastycurry.com/wp-content/uploads/2023/09/Ragi-beetroot-uttapam-recipe.jpg"
          class="h-screen w-90 absolute top-0"
          alt="..."
        ></img>  
        <p className="absolute top-20 text-orange-900  z-10 flex font-mono  font-bold text-8xl ...  ">Foodies</p>
        <p className="absolute top-65 text-3xl z-10 flex font-mono	text-base/6 ... text-orange-900 items-center  antialiased ... right-0  font-bold" >  Online, easy and beautiful.</p>
  
        <button className="absolute end rounded-full ... bg-transparent hover:bg-black-500 text-yellow-900 font-semibold hover:text-white py-3 px-6 border border-yellow-900 hover:border-transparent rounded absolute bottom-60 left-80 ...">login</button>
      </div>
      </div>
      
  ); 
};
export default Home;

import instance from ".";

const getAllRecipe = async () => {
  const res = await instance.get("/api/recipes");
  return res.data;
};
const CreateRecipe = async (name) => {
  const res = await instance.post("/api/recipes", {
    categoryname: name,
  });
  return res.data;
};
const getRecipe = async () => {};
const uppdateRecipe = async () => {
  const res = await instance.put("/api/:recipes", {});
  return res.data;
};

export { getAllRecipe, CreateRecipe, getRecipe, uppdateRecipe };

import instance from ".";

const getAllCategory = async () => {
  const res = await instance.get("/api/categories/");
  return res.data;
};
const createCategory = async (name) => {
  const res = await instance.post("/api/categories/", {
    categoryname: name,
  });
  return res.data;
};

const updateCategory = async () => {
  const res = await instance.post("/api/categories");
};
const deleteCategory = async () => {};
export default {
  getAllCategory,
  createCategory,
  getCategory,
  uppdateCategory,
  deleteCategory,
};

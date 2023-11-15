import instance from ".";

const getAllUsers = async () => {
  const res = await instance.get("/api/users");
  return res.data;
};
const createUser = async (name) => {
  const res = await instance.post("/api/users", {
    name: name,
  });
  return res.data;
};

const updateUser = async () => {
  const res = await instance.put("/api/users");
};
const deleteCategory = async () => {};
export default {
  getAllCategory,
  createCategory,
  getCategory,
  uppdateCategory,
  deleteCategory,
};

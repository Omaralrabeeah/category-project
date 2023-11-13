import instance from ".";

const getAllCategory = async () => {
  const res = await instance.get("Backend category url");
  return res.data;
};
const createCategory = async (name) => {
  const res = await instance.post("/api/categories", {
    categoryname: name
   
  });
  return res.data;
};
export default { getAllCategory, createCategory };

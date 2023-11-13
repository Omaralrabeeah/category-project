import instanse from ".";

const login = async (userInfo) => {
  const res = await instanse.post("", userInfo);
  return res.data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  const res = await instanse.post("", userInfo);
  return res.data;
};

export { login, register };

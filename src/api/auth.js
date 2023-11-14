import { jwtDecode } from "jwt-decode";
import instanse from ".";

const login = async (userInfo) => {
  const { data } = await instanse.post("/api/users/signin", userInfo);
  storeToken(data?.token);
  return data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);
  const { data } = await instanse.post("/api/users/signup", formData);
  storeToken(data?.token);

  return data;
};
const storeToken = (token) => {
  localStorage.setItem("token", token);
};
const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
    } else return false;
  } else return false;
};
const logOut = () => {
  localStorage.removeItem("token");
};

export { login, register, storeToken, checkToken, logOut };

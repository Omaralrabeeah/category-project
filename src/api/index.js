import axios from "axios";

const instanse = axios.create({
  baseURL: "BACKEND_URL",
});

export default instanse;

import axios from "axios";
import { api } from "./backend";

export const loginApi = async (formData) => {
  const jwtKey = await axios.post(`${api}/auth`, formData);
  return jwtKey.data;
};

export const registerApi = async (formData) => {
  const res = await axios.post(`${api}/users`, formData);
  console.log(res.data.token);

  return { data: res.data.user, token: res.data.token };
};

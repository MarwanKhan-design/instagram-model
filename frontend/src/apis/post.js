import axios from "axios";
import { api, token } from "./backend";

export const getPostsApi = async () => {
  const posts = await axios.get(`${api}/post`);
  return posts.data;
};
export const createPostsAPi = async (data) => {
  const posts = await axios.post(`${api}/post`, data, {
    headers: {
      "x-auth-token": token,
    },
  });
  return posts.data;
};
export const deletePostsApi = async () => {
  const posts = await axios.delete(`${api}/post`, data, {
    headers: {
      "x-auth-token": token,
    },
  });
  return posts.data;
};

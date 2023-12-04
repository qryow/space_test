import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../helpers/consts";
import axios from "axios";
import { getAuthConfig } from "../../helpers/functions";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const { data } = await axios.get(`${API}/space-hub/posts/`);
  console.log(data);
  return data;
});

export const getProfilePosts = createAsyncThunk(
  "posts/getProfilePosts",
  async () => {
    const config = getAuthConfig();
    const localEmail = localStorage.getItem("account");
    const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, "") : "";

    const { data } = await axios.get(
      `${API}/space-hub/posts/`,
      config ? config : null
    );
    const filteredData = data.filter(
      (item) => item.author === emailWithoutQuotes
    );
    return filteredData;
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postObj }, { dispatch }) => {
    const config = getAuthConfig();
    const newObj = new FormData();
    newObj.append("blog", postObj.blog);
    newObj.append("category", postObj.category);
    newObj.append("title", postObj.title);
    newObj.append("content", postObj.content);
    const { data } = await axios.post(
      `${API}/space-hub/posts/`,
      newObj,
      config ? config : null
    );
    dispatch(getProfilePosts());
    return data;
  }
);

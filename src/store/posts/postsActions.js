import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../helpers/consts";
import axios from "axios";
import { getAuthConfig } from "../../helpers/functions";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const config = getAuthConfig();
  const { data } = await axios.get(
    `${API}/space-hub/posts/`,
    config ? config : null
  );
  console.log(data);
  return data;
});

export const getProfilePosts = createAsyncThunk(
  "posts/getProfilePosts",
  async () => {
    const localEmail = localStorage.getItem("account");
    const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, "") : "";

    const { data } = await axios.get(`${API}/space-hub/posts/`);
    const filteredData = data.filter(
      (item) => item.author === emailWithoutQuotes
    );
    return filteredData;
  }
);

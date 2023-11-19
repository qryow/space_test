import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";

const config = getAuthConfig();

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async ({ id }) => {
    console.log(id);
    const { data } = await axios.get(`${API}/profile/profile/${id}`);
    console.log(data);
    return data;
  }
);

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async ({ editedObj, id }) => {
    console.log(id);
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    console.log(editedObj);
    let formData = new FormData();
    formData.append("username", editedObj.username);
    formData.append("first_name", editedObj.first_name);
    formData.append("last_name", editedObj.last_name);
    formData.append("professions", editedObj.professions);
    formData.append("country", editedObj.country);
    formData.append("arial", editedObj.arial);
    console.log(formData);
    if (typeof editedObj.profile_background === "object") {
      formData.append("profile_background", editedObj.profile_background);
    }
    if (typeof editedObj.profile_image === "object") {
      formData.append("profile_image", editedObj.profile_image);
    }
    let { data } = await axios.patch(
      `${API}/profile/profile/${id}/`,
      formData,
      config ? config : null
    );
    window.location.reload();
    return { data };
  }
);

export const getLanguages = createAsyncThunk(
  "language/getLanguage",
  async (_, { getState }) => {
    const localEmail = localStorage.getItem("account");
    const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, "") : "";

    const { data } = await axios.get(`${API}/e_h/add_language/`);
    const filteredData = data.results.filter(
      (item) => item.user === emailWithoutQuotes
    );

    console.log(filteredData);
    return filteredData;
  }
);

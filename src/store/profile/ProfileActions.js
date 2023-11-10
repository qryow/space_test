import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";

const config = getAuthConfig();

export const getProfile = createAsyncThunk(
  "profile/getProfiles", 
  async () => {
  const { data } = await axios.get(`${API}/profile/profile/`);
  console.log(data);
  return data;
});

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async ({ editedObj, id }, { getState }) => {
    const config = getAuthConfig();
    const updatedProfile = { ...editedObj };

    const res = await axios.patch(
      `${API}/profile/profile/${id}/`,
      updatedProfile,
      config
    );
    window.location.reload();
    return res;
  }
);

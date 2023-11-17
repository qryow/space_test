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
  'profile/editProfile',
  async ({ editedObj }, dispatch) => {
    const tokens = JSON.parse(localStorage.getItem('tokens'));
    const Authorization = `Bearer ${tokens.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    let formData = new FormData();
    
    for (const key in editedObj) {
      const value = editedObj[key];

      if (value !== null && value !== undefined && value !== "") {
        formData.append(key, value);
      }
    }
    console.log(editedObj);
    let { data } = await axios.patch(`${API}/profile/profile/4/`, formData, config ? config : null  )
    console.log(data);
    return { data }
  }
)
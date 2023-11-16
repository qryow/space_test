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

//export const editProfile = createAsyncThunk(
//  "profile/editProfile",
//  async ({ editedObj, id }) => {
//    const config = getAuthConfig();
//    const updatedProfile = { ...editedObj };

//    const res = await axios.patch(
//      `${API}/profile/profile/${id}/`,
//      updatedProfile,
//      config
//    );
//    window.location.reload();
//    return res;
//  }
//);

//export const editProfile = createAsyncThunk(
//  "profile/editProfile",
//  async ({ editedObj, id }) => {
//    console.log(editedObj)
//    let formData = new FormData();
//    formData.append('username', editedObj.username);
//    formData.append('first_name', editedObj.first_name);
//    formData.append('last_name', editedObj.last_name);
//    formData.append('professions', editedObj.professions);
//    formData.append('country', editedObj.country);
//    formData.append('arial', editedObj.arial);

//    const updatedProfile = { ...editedObj };
//    formData.append('profile_background', editedObj.profile_background);
//    let { data } = await axios.patch(`${API}/profile/profile/9/`, formData, config ? config : null)
//    console.log(data);
//    console.log(id);
//    return { data }
//  }
//)

export const editProfile = createAsyncThunk(
  "profile/editProfile",
  async ({ editedObj, id }) => {
    console.log(id);
    //const tokens = JSON.parse(localStorage.getItem('tokens'));
    //const Authorization = `Bearer ${tokens.access}`;
    //const config = {
    //  headers: {
    //    Authorization,
    //  },
    //};
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
    console.log(data);
    console.log(id);
    window.location.reload();
    return { data };
  }
);

//export const editProfile = createAsyncThunk(
//  "profile/editProfile",
//  async ({ editedObj, navigate, id }) => {
//    const tokens = JSON.parse(localStorage.getItem('tokens'));
//    const Authorization = `Bearer ${tokens.access}`;
//    const config = {
//      headers: {
//        Authorization,
//      },
//    };
//    let formData = new FormData();
//    formData.append('username', editedObj.username);
//    formData.append('first_name', editedObj.first_name);
//    formData.append('last_name', editedObj.last_name);
//    formData.append('professions', editedObj.professions);
//    formData.append('country', editedObj.country);
//    formData.append('arial', editedObj.arial);
//    let { data } = await axios.put(`${API}/profile/profile/${id}/`, formData, config ? config : null  )
//    console.log(data);
//    console.log(id);
//    return { data, navigate }
//  }
//)

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
//    formData.append('profile_background', editedObj.profile_background);

//    //const updatedProfile = { ...editedObj };
//    let { data } = await axios.put(`${API}/profile/profile/4/`, formData, config ? config : null)
//    console.log(data);
//    console.log(id);
//    return { data }
//  }
//)

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
    //let formData = new FormData();
    //formData.append('username', editedObj.username);
    //formData.append('first_name', editedObj.first_name);
    //formData.append('last_name', editedObj.last_name);
    //formData.append('professions', editedObj.professions);
    //formData.append('country', editedObj.country);
    //formData.append('arial', editedObj.arial);
    //formData.append('profile_background', editedObj.profile_background);

    let formData = new FormData();
    
    for (const key in editedObj) {
      const value = editedObj[key];

      // Проверка, что значение не пустое
      if (value !== null && value !== undefined && value !== "") {
        formData.append(key, value);
      }
    }
    console.log(editedObj);
    let { data } = await axios.patch(`${API}/profile/profile/4/`, formData, config ? config : null  )
    console.log(data);
    //console.log(id);
    return { data }
  }
)



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
//    formData.append('profile_image', editedObj.profile_image);
//    formData.append('profile_background', editedObj.profile_background);
//    for (let pair of formData.entries()) {
//      console.log(pair[0]+ ', ' + pair[1]); 
//    }
//    //formData.append('profile_background', editedObj.profile_background);
//    let { data } = await axios.patch(`${API}/profile/profile/4/`, formData, config ? config : null  )
//    console.log(data);
//    console.log(id);
//    return { data }
//  }
//)


//export const editProfile = createAsyncThunk(
//  "profile/editProfile",
//  async ({ editedObj, id }) => {
//    console.log(id);
//    //const tokens = JSON.parse(localStorage.getItem('tokens'));
//    //const Authorization = `Bearer ${tokens.access}`;
//    //const config = {
//    //  headers: {
//    //    Authorization,
//    //  },
//    //};
//    console.log(editedObj);
//    let formData = new FormData();
//    formData.append("username", editedObj.username);
//    formData.append("first_name", editedObj.first_name);
//    formData.append("last_name", editedObj.last_name);
//    formData.append("professions", editedObj.professions);
//    formData.append("country", editedObj.country);
//    formData.append("arial", editedObj.arial);
//    console.log(formData);
//    if (typeof editedObj.profile_background === "object") {
//      formData.append("profile_background", editedObj.profile_background);
//    }
//    if (typeof editedObj.profile_image === "object") {
//      formData.append("profile_image", editedObj.profile_image);
//    }
//    let { data } = await axios.patch(
//      `${API}/profile/profile/4/`,
//      formData,
//      config ? config : null
//    );
//    console.log(data);
//    console.log(id);
//    window.location.reload();
//    return { data };
//  }
//);

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

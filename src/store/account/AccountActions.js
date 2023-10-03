import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { API } from '../../helpers/consts'
import { getAuthConfig } from "../../helpers/functions";

const config = getAuthConfig();

export const registerUser = createAsyncThunk(
  'account/registerUser',
  async ({ userObj, navigate }) => {
    let formData = new FormData();
    formData.append('username', userObj.username);
    formData.append('email', userObj.email);
    formData.append('password', userObj.password);
    formData.append('password_confirm', userObj.password_confirm);
    let { data } = await axios.post(`${API}/account/register/`, formData);
    console.log(data);
    return { data, navigate}
  }
)

export const loginUser = createAsyncThunk(
  'account/loginUser',
  async ({ userObj, navigate}) => {
    let formData = new FormData();
    formData.append('email', userObj.email);
    formData.append('password', userObj.password);
    let { data } = await axios.post(`${API}/account/login/`, formData);
    console.log(data);
    return { data, navigate, user: userObj.email}
  }
)

export const changePassword = createAsyncThunk(
  'account/changePassword',
  async ({ userObj, navigate }) => {
    let formData = new FormData();
    formData.append('old_password', userObj.old_password);
    formData.append('new_password', userObj.new_password);
    formData.append('new_password_confirm', userObj.new_password_confirm);
    let { data } = await axios.post(`${API}/account/change_password/`, formData, config ? config : null);
    console.log(data);
    return { data, navigate };
  }
)

export const losePassword = createAsyncThunk(
  'account/losePassword',
  async ({ userObj, navigate }) => {
    let formData = new FormData();
    formData.append('email', userObj.email);
    let { data } = await axios.post(`${API}/account/lose_password/`, formData);
    console.log(data);
    return { data, navigate };
  }
)

export const losePasswordComplete = createAsyncThunk(
  'account/losePasswordComplete',
  async ({ userObj, navigate }) => {
    let formData = new FormData();
    formData.append('code', userObj.code);
    formData.append('email', userObj.email);
    formData.append('password', userObj.password);
    formData.append('password_confirm', userObj.password_confirm);
    let { data } = await axios.post(`${API}/account/lose_confirm/`, formData);
    console.log(data);
    return { data, navigate }
  }

)
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
    const config = getAuthConfig();
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

    return filteredData;
  }
);

export const createLanguage = createAsyncThunk(
  "language/createLanguage",
  async ({ language }, { dispatch }) => {
    const config = getAuthConfig();
    const newLang = new FormData();
    newLang.append("languages", language.languages);
    newLang.append("languages_level", language.languages_level);
    const { data } = await axios.post(
      `${API}/e_h/add_language/`,
      newLang,
      config ? config : null
    );
    dispatch(getLanguages());
    return data;
  }
);

export const editLanguage = createAsyncThunk(
  "language/editLanguage",
  async ({ language, id }, { dispatch }) => {
    const config = getAuthConfig();
    let formData = new FormData();
    formData.append("languages", language.username);
    formData.append("languages_level", language.first_name);
    console.log(formData);
    let { data } = await axios.patch(
      `${API}/e_h/add_language/${id}/`,
      formData,
      config ? config : null
    );
    dispatch(getLanguages());
    return { data };
  }
);

export const deleteLanguage = createAsyncThunk(
  "language/deleteLanguage",
  async ({ id }, { dispatch }) => {
    await axios.delete(`${API}/e_h/add_language/${id}`);
    dispatch(getLanguages());
  }
);

export const getEducations = createAsyncThunk(
  "education/getEducations",
  async (_, { getState }) => {
    const localEmail = localStorage.getItem("account");
    const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, "") : "";

    const { data } = await axios.get(`${API}/e_h/education_history/`);
    const filteredData = data.results.filter(
      (item) => item.user === emailWithoutQuotes
    );

    return filteredData;
  }
);

export const createEducation = createAsyncThunk(
  "education/createEducation",
  async ({ education }, { dispatch }) => {
    const config = getAuthConfig();
    const newEduc = new FormData();
    newEduc.append("school", education.school);
    newEduc.append("degree", education.degree);
    newEduc.append("field_of_study", education.field_of_study);
    newEduc.append("description", education.description);
    const { data } = await axios.post(
      `${API}/e_h/education_history/`,
      newEduc,
      config ? config : null
    );
    dispatch(getEducations());
    return data;
  }
);

export const editEducation = createAsyncThunk(
  "education/editEducation",
  async ({ education, id }, { dispatch }) => {
    const config = getAuthConfig();
    let formData = new FormData();
    formData.append("school", education.school);
    formData.append("degree", education.degree);
    formData.append("field_of_study", education.field_of_study);
    formData.append("description", education.description);
    let { data } = await axios.patch(
      `${API}/e_h/education_history/${id}/`,
      formData,
      config ? config : null
    );
    dispatch(getEducations());
    return { data };
  }
);

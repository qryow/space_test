import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";

const config = getAuthConfig();

export const registerUser = createAsyncThunk(
    "account/registerUser",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("email", userObj.email);
        formData.append("first_name", userObj.first_name);
        formData.append("last_name", userObj.last_name);
        formData.append("password", userObj.password);
        formData.append("password_confirm", userObj.password_confirm);
        let { data } = await axios.post(`${API}/account/register/`, formData);
        console.log(data);
        return { data, navigate };
    }
);

export const activateUser = createAsyncThunk(
    "account/activateUser",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("email", userObj.email);
        formData.append("code", userObj.code);
        let { data } = await axios.post(
            `${API}/account/activate_code/`,
            formData
        );
        console.log(data);
        return { data, navigate };
    }
);

export const loginUser = createAsyncThunk(
    "account/loginUser",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("email", userObj.email);
        formData.append("password", userObj.password);
        let { data } = await axios.post(`${API}/account/login/`, formData);
        console.log(data);
        return { data, user: userObj.email };
    }
);

export const changePassword = createAsyncThunk(
    "account/changePassword",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("old_password", userObj.old_password);
        formData.append("new_password", userObj.new_password);
        formData.append("new_password_confirm", userObj.new_password_confirm);
        let { data } = await axios.post(
            `${API}/account/change_password/`,
            formData,
            config ? config : null
        );
        console.log(data);
        return { data, navigate };
    }
);

export const losePassword = createAsyncThunk(
    "account/losePassword",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("email", userObj.email);
        let { data } = await axios.post(
            `${API}/account/lose_password/`,
            formData
        );
        console.log(data);
        return { data, navigate };
    }
);

export const losePasswordComplete = createAsyncThunk(
    "account/losePasswordComplete",
    async ({ userObj, navigate }) => {
        let formData = new FormData();
        formData.append("code", userObj.code);
        formData.append("email", userObj.email);
        formData.append("password", userObj.password);
        formData.append("password_confirm", userObj.password_confirm);
        let { data } = await axios.post(
            `${API}/account/lose_confirm/`,
            formData
        );
        console.log(data);
        return { data, navigate };
    }
);

export const getUsers = createAsyncThunk("account/getUsers", async () => {
    const { data } = await axios.get(`${API}/account/users/`);
    return data;
});

export const patchUser = createAsyncThunk(
    "account/patchUser",
    async ({ userObj, navigate, id }) => {
        let formData = new FormData();
        formData.append("username", userObj.username);
        formData.append("first_name", userObj.first_name);
        formData.append("last_name", userObj.last_name);
        formData.append("professions", userObj.professions);
        formData.append("country", userObj.country);
        formData.append("arial", userObj.arial);
        let { data } = await axios.put(
            `${API}/profile/profile/${id}/`,
            formData,
            config ? config : null
        );
        console.log(data);
        console.log(id);
        return { data, navigate };
    }
);

//export const addLang = createAsyncThunk(
//  'account/addLang',
//  async (updatedLangObjs, thunkAPI) => {
//    const responses = await Promise.all(
//      updatedLangObjs.map(async (langObj) => {
//        let formData = new FormData();
//        formData.append('languages', langObj.language);
//        formData.append('languages_level', langObj.languages_level);
//        return await axios.post(`${API}/e_h/add_language/`, formData, config ? config : null);
//      })
//    );

//    const data = responses.map((response) => response.data);
//    return data;
//  }
//);

export const addLang = createAsyncThunk(
    "account/addLang",
    async (updatedLangObjs, thunkAPI) => {
        try {
            if (!updatedLangObjs) {
                throw new Error("updatedLangObjs is undefined or null");
            }

            const responses = await Promise.all(
                updatedLangObjs.map(async (langObj) => {
                    let formData = new FormData();
                    formData.append("languages", langObj.language);
                    formData.append("languages_level", langObj.languages_level);
                    return await axios.post(
                        `${API}/e_h/add_language/`,
                        formData,
                        config ? config : null
                    );
                })
            );

            const data = responses.map((response) => response.data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

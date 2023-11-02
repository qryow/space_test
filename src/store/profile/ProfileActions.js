import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";

const config = getAuthConfig();

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async () => {
        const { data } = await axios.get(`${API}/profile/profile/`)
        console.log(data);
        return data
    }
)
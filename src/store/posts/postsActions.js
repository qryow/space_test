import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from '../../helpers/consts';
import axios from "axios";
import { getAuthConfig } from '../../helpers/functions';


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const config = getAuthConfig();
        const { data } = await axios.get(`${API}/space-hub/posts/`, config ? config : null);
        console.log(data);
        return data;
    }
    
);

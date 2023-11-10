import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getAuthConfig } from "../../helpers/functions";

export const getProjects = createAsyncThunk(
    "projects/getProjects",
    async () => {
        const { data } = await axios.get(`${API}/space-hub/projects`);
        return { data };
    }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from '../../helpers/consts';
import axios from "axios";
import { getAuthConfig } from '../../helpers/functions';

export const getProjects = createAsyncThunk(
    'projects/getProjects',
    async (_, { getState }) => {
        const { currentPage } = getState().projects;
        const config = getAuthConfig();
        const { data } = await axios.get(`${API}/space-hub/projects/?page=${currentPage}`, config ? config : null);
        return data;
    }
    
);


export const createProject = createAsyncThunk(
    'projects/createProject',
    async ({ project, navigate }, { dispatch }) => {
        const config = getAuthConfig();
        const newProduct = new FormData();
        newProduct.append('title', project.title);
        newProduct.append('description', project.description);
        newProduct.append('author', project.author);
        newProduct.append('location', project.location);
        newProduct.append('image', project.image);
        const { data } = await axios.post(`${API}/space-hub/projects/`, newProduct, config ? config : null);
        dispatch(getProjects());
        return { data, navigate };
    }
);
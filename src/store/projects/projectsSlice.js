import { createSlice } from "@reduxjs/toolkit";
import { getProjects, createProject } from "./projectsActions";

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        loading: false,
        oneProject: null,
        currentPage: 1,
        totalPages: 1
    },
    reducers: {
        clearOneProjectState: (state) => {
            state.oneProject = null;
        },
        changePage: (state, action) => {
            state.currentPage = action.payload.page;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProjects.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProjects.fulfilled, (state, action) => {
            state.loading = false;
            state.projects = action.payload.results;
            state.totalPages = Math.ceil(action.payload.count / 6);
        })
        .addCase(getProjects.rejected, (state) => {
            state.loading = false;
        })
        .addCase(createProject.fulfilled, (_, action) => {
            action.payload.navigate('/profile');
        })
    }

})

export const { clearOneProjectState, changePage } = projectsSlice.actions;
export default projectsSlice.reducer;
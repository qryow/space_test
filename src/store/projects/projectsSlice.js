import { createSlice } from "@reduxjs/toolkit";
import { getProjects, createProject } from "./ProjectsActions";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [],
        loading: false,
        oneProject: null,
    },
    reducers: {
        clearOneProjectState: (state) => {
            state.oneProject = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProjects.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.projects = action.payload;
                state.totalPages = Math.ceil(action.payload.count / 6);
                console.log(action.payload);
            })
            .addCase(getProjects.rejected, (state) => {
                state.loading = false;
            })
            .addCase(createProject.fulfilled, (_, action) => {
                action.payload.navigate("/profile");
            });
    },
});

export const { clearOneProjectState } = projectsSlice.actions;
export default projectsSlice.reducer;

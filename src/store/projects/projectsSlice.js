import { createSlice, isActionCreator } from "@reduxjs/toolkit";
import { getProjects } from "./projectsActions";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        currentAccount: null,
        status: "",
        loading: false,
        projects: [],
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProjects.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.projects = action.payload.data;
            })
            .addCase(getProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default projectsSlice.reducer;

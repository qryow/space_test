import { createSlice, isActionCreator } from "@reduxjs/toolkit";
import { getProjects, getProfileProjects } from "./ProjectsActions";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    status: "",
    loading: false,
    projects: [],
    profileProjects: [],
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
        state.projects = action.payload.results;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProfileProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfileProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.profileProjects = action.payload;
        console.log(action.payload);
      })
      .addCase(getProfileProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;

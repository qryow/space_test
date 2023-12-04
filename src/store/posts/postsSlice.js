import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getProfilePosts } from "./PostsActions";

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    onePost: null,
    profilePosts: [],
  },
  reducers: {
    clearOnePostState: (state) => {
      state.onePost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        console.log(action.payload);
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getProfilePosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfilePosts.fulfilled, (state, action) => {
        state.loading = false;
        state.profilePosts = action.payload;
      })
      .addCase(getProfilePosts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearOneProjectState } = PostsSlice.actions;
export default PostsSlice.reducer;

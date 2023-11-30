import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsActions";

const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    onePost: null,
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
      });
    // .addCase(getPosts.fulfilled, (_, action) => {
    //     action.payload.navigate('/profile');
    // })
  },
});

export const { clearOneProjectState } = PostsSlice.actions;
export default PostsSlice.reducer;

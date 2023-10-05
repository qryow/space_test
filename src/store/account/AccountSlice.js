import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, changePassword, losePassword, losePasswordComplete } from "./AccountActions";
import { addDataToLocalStorage, updateToken } from "../../helpers/functions";


const accountSlice = createSlice({
  name: 'account',
  initialState: {
    currentAccount: null,
    loading: false,
    status: ''
  },
  reducers: {
    clearCurrentAccount: (state) => {
      state.currentAccount = null;
    },
    clearStatus: (state) => {
      state.status = ''
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.navigate('/activate')
    })
    .addCase(registerUser.rejected, (state) => {
      state.loading = false;
      state.status = 'error'
    })
    .addCase(loginUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAccount = action.payload.user;
      addDataToLocalStorage(action.payload.user, action.payload.data);
      updateToken();
      action.payload.navigate('/')
    })
    .addCase(loginUser.rejected, (state) => {
      state.loading = false;
      state.status = 'error';
    })
    .addCase(changePassword.pending, (state) => {
      state.loading = true;
    })
    .addCase(changePassword.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.navigate('/')
    })
    .addCase(changePassword.rejected, (state) => {
      state.loading = false;
      state.status = 'error';
    })
    .addCase(losePassword.pending, (state) => {
      state.loading = true;
    })
    .addCase(losePassword.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.navigate('/lose-password-complete')
    })
    .addCase(losePassword.rejected, (state) => {
      state.loading = false;
      state.status = 'error';
    })
    .addCase(losePasswordComplete.pending, (state) => {
      state.loading = true;
    })
    .addCase(losePasswordComplete.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.navigate('/')
    })
    .addCase(losePasswordComplete.rejected, (state) => {
      state.loading = false;
      state.status = 'error';
    })
  }
})


export const { clearCurrentAccount, clearStatus } = accountSlice.actions;
export default accountSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { registerUser, activateUser, loginUser, changePassword, losePassword, losePasswordComplete, getUsers, patchUser, addLang } from "./AccountActions";
import { addDataToLocalStorage, updateToken } from "../../helpers/functions";


const accountSlice = createSlice({
  name: 'account',
  initialState: {
    currentAccount: null,
    currentProfile: [],
    loading: false,
    status: '',
    profileStatus: '',
    users: []
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
    .addCase(activateUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(activateUser.fulfilled, (state, action) => {
      state.loading = false;
      action.payload.navigate('/login')
    })
    .addCase(activateUser.rejected, (state) => {
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
      action.payload.navigate('/password-changed')
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
      action.payload.navigate('/password-changed')
    })
    .addCase(losePasswordComplete.rejected, (state) => {
      state.loading = false;
      state.status = 'error';
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload.results;
    })


    .addCase(patchUser.fulfilled, (state, action) => {
      state.currentProfile = action.payload;
      console.log(action.payload);
      action.payload.navigate('/')
    })
    .addCase(patchUser.rejected, (state, action) => {
      state.profileStatus = 'error'
      //state.error = action.error.message; // Здесь мы сохраняем сообщение об ошибке
      //console.error(action.error);
      //console.log(state.profileStatus);
    })
    .addCase(addLang.fulfilled, (state, action) => {
      state.currentProfile = action.payload
      console.log(action.payload);
    })
  }
})


export const { clearCurrentAccount, clearStatus } = accountSlice.actions;
export default accountSlice.reducer;
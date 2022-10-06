import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    userInfo: {},
    loading: false,
  },
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.userInfo = action.payload.userInfo;
    },
    logout: (state) => {
      state.accessToken = null;
      state.userInfo = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM3MTBhZTYyMzgxMjFiZDlmZjRmNDYiLCJpYXQiOjE2NjQ4ODI4Nzd9.O6ikmrJ-jU4thwXvpXth2Z-LhNg4mwf2TTolf_ufut8";
// city: "indore";
// country: "india";
// email: "siddhart@gmail.com";
// firstName: "Siddhart";
// lastName: "Tiwari";
// _id: "633710ae6238121bd9ff4f46";

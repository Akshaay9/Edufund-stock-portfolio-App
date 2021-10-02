import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [
    {
      id: 1,
      email: "test@gmail.com",
      passowrd: "Test98#",
    },
    {
      id: 2,
      email: "admin@gmail.com",
      passowrd: "Test98#",
    },
  ],
  isLoggedIn: localStorage.getItem("auth")
    ? JSON.stringify(localStorage.getItem("auth"))
    : false,
};

 const AuthSLice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {},
    logOut: (state) => {},
    signUp: (state, { paylad }) => {},
  },
  extraReducers: {},
});

export const { logIn, logOut, signUp } = AuthSLice.actions;
export default AuthSLice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [
    {
      id: 1,
      firstName: "akshay",
      lastName: "sr",
      gender: "male",
      dob: "1998-8-9",
      email: "test@gmail.com",
      passowrd: "Test98#",
    },
    {
      id: 2,
      firstName: "ajax",
      lastName: "shin",
      gender: "male",
      dob: "1998-8-9",
      email: "admin@gmail.com",
      passowrd: "Test98#",
    },
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : {},
  ],
  isLoggedIn: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
};

const AuthSLice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.isLoggedIn = true;
      localStorage.setItem("auth", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
    },
    signUp: (state, { paylad }) => {},
  },
  extraReducers: {},
});

export const { logIn, logOut, signUp } = AuthSLice.actions;
export default AuthSLice.reducer;

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
      pass: "Test98#",
    },
    {
      id: 2,
      firstName: "ajax",
      lastName: "shin",
      gender: "male",
      dob: "1998-8-9",
      email: "admin@gmail.com",
      pass: "Test98#",
    },
  ],
  isLoggedIn: localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : false,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  guestUser: {
    id: 1,
    firstName: "akshay",
    lastName: "sr",
    gender: "male",
    dob: "1998-8-9",
    email: "test@gmail.com",
    pass: "Test98#",
  },
};

const AuthSLice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload;
      localStorage.setItem("auth", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(payload));
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = {};
      localStorage.removeItem("auth");
      localStorage.removeItem("user");
    },
    updateData: (state, { payload }) => {
      state.guestUser = { ...state.guestUser, ...payload };
      state.userData = state.userData.map((ele) => {
        if (ele.id === payload.id) {
          console.log({
            ...ele,
            ...payload,
          });
          return {
            ...ele,
            ...payload,
          };
        } else {
          return ele;
        }
      });
    },
  },
  extraReducers: {},
});

export const { logIn, logOut, updateData } = AuthSLice.actions;
export default AuthSLice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/AuthSlice";
import Products from "../features/products/AllProducts";

export const store = configureStore({
  reducer: {
    User: AuthReducer,
    Products,
  },
});

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AllProducts from "../../data/products.json";

const initialState = {
  Products: AllProducts
};

const ProductSLice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default ProductSLice.reducer;

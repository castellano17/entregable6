import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const pruebaSlice = createSlice({
  name: "esmir",
  initialState,
  reducers: {},
});

export default pruebaSlice.reducer;

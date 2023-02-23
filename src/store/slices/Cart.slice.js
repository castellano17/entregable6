import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce, getConfig } from "../../utils/configAxios";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductsCartGlobal: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});

const { setProductsCartGlobal } = cartSlice.actions;

export const getAllCartProducts = () => (dispatch) => {
  axiosEcommerce
    .get("/cart", getConfig())
    .then((res) => dispatch(setProductsCartGlobal(res.data)))
    .catch((err) => console.log(err));
};

export const addProductCart = (data) => (dispatch) => {
  axiosEcommerce
    .post("/cart", data, getConfig())
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export default cartSlice.reducer;

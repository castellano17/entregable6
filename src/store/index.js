import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/useInfo.slice";
import cart from "./slices/Cart.slice";
import esmir from "./slices/Prueba.slice";

export default configureStore({
  reducer: {
    userInfo,
    cart,
    esmir,
  },
});

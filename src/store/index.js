import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/useInfoSlice";

export default configureStore({
  reducer: { userInfo },
});

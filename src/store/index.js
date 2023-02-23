import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/useInfo.slice";

export default configureStore({
  reducer: { userInfo },
});

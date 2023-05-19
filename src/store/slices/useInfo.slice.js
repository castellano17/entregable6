import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce } from "../../utils/configAxios";
import { setProductsCartGlobal } from "./Cart.slice";
const initialState = {
  user: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    createdAt: "",
    updatedAt: "",
  },
  token: "",
};
const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : initialState,
  reducers: {
    setUserInfoGlobal: (state, action) => {
      return action.payload;
    },
    signupUser: (state, action) => {},
  },
});

const { setUserInfoGlobal } = userInfoSlice.actions;

export const loginUser = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    // Devuelve una promesa para poder capturar el error en el componente
    axiosEcommerce
      .post("/users/login", data)
      .then((res) => {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        dispatch(setUserInfoGlobal(res.data));
        resolve(); // Resuelve la promesa si la petición fue exitosa
      })
      .catch((err) => {
        reject(new Error("Usuario o clave incorrecta")); // Rechaza la promesa con un nuevo error
      });
  });
};

export const userLogOut = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(setUserInfoGlobal(initialState));
  dispatch(setProductsCartGlobal([]));
};

export const signup = (data) => (dispatch) => {
  axiosEcommerce
    .post("/users", data)
    .then((res) => {
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      dispatch(setUserInfoGlobal(res.data));
      dispatch(setUserInfoGlobal(initialState));
      dispatch(setProductsCartGlobal([]));
    })
    .catch((err) => console.log(err));
};

export default userInfoSlice.reducer;

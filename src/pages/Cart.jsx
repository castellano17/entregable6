import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCartProducts } from "../store/slices/Cart.slice";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCartProducts());
  }, []);
  return <main></main>;
};

export default Cart;

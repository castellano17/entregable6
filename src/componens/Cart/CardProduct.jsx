import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteProductCart,
  updateProductCart,
} from "../../store/slices/Cart.slice";
import "./Styles/CardProduct.css";

const CardProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleDeleteCartProduct = () => {
    dispatch(deleteProductCart(product.id));
  };

  const handleClickPlus = () => {
    const newQuantity = product.quantity + 1;
    const data = {
      quantity: newQuantity,
    };
    dispatch(updateProductCart(product.id, data));
  };

  const handleClickLess = () => {
    const newQuantity = product.quantity - 1;
    if (newQuantity <= 0) {
      dispatch(deleteProductCart(product.id));
    } else {
      const data = {
        quantity: newQuantity,
      };
      dispatch(updateProductCart(product.id, data));
    }
  };

  return (
    <article className="cardProduct">
      <div className="cardProduct-img">
        <img src={product.product.images[0].url} alt="" />
      </div>

      <section>
        <h3 className="cardProduct__title">{product.product.title}</h3>
        <div className="cardProduct__quantity">
          <div className="counter">
            <button onClick={handleClickLess} className="less">
              -
            </button>
            <h3>{product.quantity}</h3>
            <button onClick={handleClickPlus} className="plus">
              +
            </button>
          </div>
          <i
            onClick={handleDeleteCartProduct}
            className="cardProduct-btn bx bx-trash"
          ></i>
        </div>
        <section>
          <div className="cardProduct__priceTotal">
            <h3 className="cardProduct__total">Total</h3>
            <h3 className="cardProduct__price">
              $ {product.quantity * product.product.price}
            </h3>
          </div>
        </section>
      </section>
    </article>
  );
};

export default CardProduct;

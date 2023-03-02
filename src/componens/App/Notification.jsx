import React from "react";
import { useSelector } from "react-redux";
import "./styles/Notification.css";

const Notification = () => {
  const { error } = useSelector((store) => store.cart);
  const { token } = useSelector((store) => store.userInfo);

  return (
    <article className={`notification ${error ? "active" : ""}`}>
      <h3 className="notification__text">
        {token
          ? "Product already added to cart"
          : "Please login to add the product to the cart"}
      </h3>
    </article>
  );
};

export default Notification;

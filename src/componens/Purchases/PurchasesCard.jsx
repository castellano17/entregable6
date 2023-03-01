import React from "react";
import { formatDateDDMMYYYY } from "../../utils/date";
import "./styles/PurchasesCard.css";

const PurchasesCard = ({ purchase }) => {
  return (
    <article className="purchase__productItem">
      <div className="purchase__productDetails">
        <section className="purchase__imgContainer">
          <div className="purchase__detail-img">
            <img src={purchase.product.images[0].url} alt="" />
          </div>
        </section>
        <h4>{purchase.product.title}</h4>
      </div>
      <div>
        <h4 className="purchase__productPrice">
          {formatDateDDMMYYYY(purchase.createdAt)}
        </h4>
        <div>
          <h4>{purchase.quantity}</h4>
          <h4>$ {purchase.product.price}</h4>
        </div>
      </div>
    </article>
  );
};

export default PurchasesCard;

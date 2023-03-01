import React from "react";
import { formatDateDDMMYYYY } from "../../utils/date";
import "./styles/PurchasesCard.css";

const PurchasesCard = ({ purchase }) => {
  return (
    <article className="purchasesCard">
      <div className="purchasesCard__img">
        <img src={purchase.product.images[0].url} alt="" />
      </div>

      <h4 className="purchasesCard__title">{purchase.product.title}</h4>

      <div className="purchasesCard__info">
        <h4>{formatDateDDMMYYYY(purchase.createdAt)}</h4>
        <div>
          <h4>{purchase.quantity}</h4>
          <h4>$ {purchase.product.price}</h4>
        </div>
      </div>
    </article>
  );
};

export default PurchasesCard;

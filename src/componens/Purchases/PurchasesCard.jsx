import React from "react";
import { formatDateDDMMYYYY } from "../../utils/date";

const PurchasesCard = ({ purchase }) => {
  return (
    <article>
      <div>
        <div>
          <img src={purchase.product.images[0].url} alt="" />
        </div>
        <h4>{purchase.product.title}</h4>
      </div>
      <div>
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

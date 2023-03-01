import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../componens/Cart/CardProduct";
import { getAllCartProducts, purchaseCart } from "../store/slices/Cart.slice";
import "./styles/Cart.css";

const Cart = () => {
  const { products } = useSelector((store) => store.cart);
  // console.log(products);
  const dispatch = useDispatch();

  const totalPriceCart = products.reduce(
    (total, product) => total + product.quantity * product.product.price,
    0
  );

  const handlePurchaseCart = () => {
    dispatch(purchaseCart());
  };

  useEffect(() => {
    dispatch(getAllCartProducts());
  }, []);
  return (
    <main>
      <section className="cart_listProducts">
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </section>
      <hr />
      <section className="cart__listFooter">
        <div className="cart__totalitems">
          <div className="cart__listTotal">Total</div>
          <h3 className="cart__listtotal-price">$ {totalPriceCart}</h3>
        </div>

        <button className="cart__list-btn" onClick={handlePurchaseCart}>
          Checkout
        </button>
      </section>
    </main>
  );
};

export default Cart;

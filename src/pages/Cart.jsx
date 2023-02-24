import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../componens/Cart/CardProduct";
import { getAllCartProducts, purchaseCart } from "../store/slices/Cart.slice";

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
      <section>
        {products.map((product) => (
          <CardProduct product={product} key={product.id} />
        ))}
      </section>
      <hr />
      <section>
        <div>Total</div>
        <h3>$ {totalPriceCart}</h3>
        <button onClick={handlePurchaseCart}>Checkout</button>
      </section>
    </main>
  );
};

export default Cart;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../componens/Cart/CardProduct";
import { getAllCartProducts } from "../store/slices/Cart.slice";

const Cart = () => {
  const { products } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

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
    </main>
  );
};

export default Cart;

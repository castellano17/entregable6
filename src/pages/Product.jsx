import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const handlePlus = () => setQuantity(quantity + 1);
  const handleLess = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  useEffect(() => {
    const URL = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`;
    axios
      .get(URL)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section>
        {/*parte superior */}
        <section>
          <div>
            <img src={product?.images[0].url} alt="" />
          </div>
        </section>

        {/* parte inferior */}
        <section>
          <div>
            <h4>{product?.brand}</h4>
            <h3>{product?.title}</h3>
          </div>

          <div>
            <h4>Quantity</h4>
            <div>
              <button onClick={handleLess}>-</button>
              <h4>{quantity}</h4>
              <button onClick={handlePlus}>+</button>
            </div>
          </div>
          <button>
            Add to cart <i className="bx bx-cart"></i>{" "}
          </button>
          <p>{product?.description}</p>
        </section>
      </section>
    </main>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import PurchasesCard from "../componens/Purchases/PurchasesCard";
import { axiosEcommerce, getConfig } from "../utils/configAxios";
import "./styles/Purchases.css";

const Purchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    axiosEcommerce
      .get("/purchases", getConfig())
      .then((res) => setPurchases(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <main>
      <section className="purchases">
        <section>
          <h3 className="purchases__title">My purchases</h3>
          <section className="purchases__container">
            {purchases.map((purchase) => (
              <PurchasesCard key={purchase.id} purchase={purchase} />
            ))}
          </section>
        </section>
      </section>
    </main>
  );
};

export default Purchases;

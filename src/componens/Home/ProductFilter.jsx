import React, { useState } from "react";
import "./styles/ProductFilter.css";

const ProductFilter = ({ categories, handleSubmit, setCategoryFilter }) => {
  return (
    <div className="filter__search-box">
      <form onSubmit={handleSubmit}>
        <div className="filter__form">
          <input
            placeholder="Search your products"
            className="filter__input"
            id="nameProduct"
            type="text"
          />
          <button>
            <i className="filter__btn bx bx-search"></i>
          </button>
        </div>

        <div className="filter__categories">
          <div>
            <h3 className="filter__categories-title">Categories</h3>
            <ul className="filter__ul">
              <li className="filter__li" onClick={() => setCategoryFilter(0)}>
                All
              </li>
              {categories.map((category) => (
                <li
                  className="filter__li"
                  onClick={() => setCategoryFilter(category.id)}
                  key={category.id}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;

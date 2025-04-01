import React from "react";
import Products from "../components/content/about/Products.jsx";

const ProductOverview = () => {
  return (
      <div className="text-center">
        <h1 className="display-4 fw-bold text-primary mb-4">Products    </h1>
        <Products />
      </div>
  );
};

export default ProductOverview;
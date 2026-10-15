import React from "react";
import product from "./product";

const ProductImage = () => (
  <img src={product.image} alt={product.name} className="card-img-top" />
);

export default ProductImage;

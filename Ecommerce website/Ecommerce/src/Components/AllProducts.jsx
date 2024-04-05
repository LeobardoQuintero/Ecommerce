import React from "react";
import ProductDetails from "./ProductDetails";

const AllProduct = ({ products }) => {
  return ( 
    <div>
      {products.map((product) => {
        return <ProductDetails key={product.id} product={product} />;
      })}
    </div>
  );
};

export default AllProduct;

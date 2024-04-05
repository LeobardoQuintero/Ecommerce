import React, { useState, useEffect } from "react";
import { getSingleProduct } from "../API";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const result = await getSingleProduct(productId);
      setProduct(result);
    };
    fetchSingleProduct();
  }, [productId]);

  if (!product) {
    return <h1>Loading...</h1>
  }

  return <ProductDetails product={product} isSingle />;
};

export default SingleProduct;

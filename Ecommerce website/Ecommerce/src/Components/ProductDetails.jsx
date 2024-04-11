import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import { addCartItem } from "../utils/helpers";

const ProductDetails = ({ product, isSingle, cart, setCart }) => {
  console.log("cart", cart);
  const navigate = useNavigate();
  const handleViewItemClick = () => {
    navigate(`/products/${product.id}`);
  };
  const handleAddToCart = () => {
    const productId = product.id;
    setCart((prevCart) => addCartItem(prevCart, productId));
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-price">${product.price}</p>
        <p>{product.category}</p>
        {isSingle && <p className="card-description">{product.description}</p>}
        <button className="card-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {!isSingle && (
          <button onClick={handleViewItemClick} className="view-item-button">
            View Item
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

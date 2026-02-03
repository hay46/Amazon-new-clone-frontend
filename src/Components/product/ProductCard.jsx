import React from "react";
import "./Product.css"; // ስሙ ተስተካክሏል
import { Link } from "react-router-dom";
function ProductCard({ product }) {

  // ዳታዎቹን በጥንቃቄ ማውጣት (Optional chaining ?. በመጠቀም)
  const title = product.ItemInfo?.Title?.DisplayValue || "No Title Available";
  const image = product.Images?.Primary?.Large?.URL;
  const price =
    product.Offers?.Listings?.[0]?.Price?.DisplayAmount ||
    "Price not available";
  const link = product.DetailPageURL;
  
  return (
    <div className="product-card">
      <Link to={link} target="_blank" rel="noreferrer">
        <img 
  src={image} 
  onError={(e) => { e.target.src = "https://placehold.co/250x300?text=No+Image"; }} 
/>
      </Link>
      
      <div className="product-info">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <div className="rating">
          <span>⭐⭐⭐⭐⭐</span>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
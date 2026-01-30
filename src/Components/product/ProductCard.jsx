import React from "react";
import "./Product.module.css"; // ስሙ ተስተካክሏል

function ProductCard({ product }) {
  // ዳታዎቹን በጥንቃቄ ማውጣት (Optional chaining ?. በመጠቀም)
  const title = product.ItemInfo?.Title?.DisplayValue || "No Title Available";
  const image = product.Images?.Primary?.Large?.URL;
  const price =
    product.Offers?.Listings?.[0]?.Price?.DisplayAmount ||
    "Price not available";
  const link = product.DetailPageURL;

  // ምስሉ ከጠፋ የሚታይ አማራጭ ምስል
  const fallbackImage =
    "https://via.placeholder.com/250x300?text=No+Image+Available";

  return (
    <div className="product-card">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={image || fallbackImage}
          onError={(e) => {
            e.target.onerror = null; // ደጋግሞ Loop እንዳያደርግ መከላከያ
            e.target.src = fallbackImage;
          }}
          alt={title}
        />
      </a>
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
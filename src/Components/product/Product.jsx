import React, { useState, useEffect } from "react";
import "./Product.css";



import ProductCard from "./ProductCard.jsx";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // እውነተኛ API ከመጥራት ይልቅ የውሸት ዳታ እዚህ እናስቀምጣለን
    const mockData = [
      {
        ASIN: "B08N5KWB9H",
        ItemInfo: {
          Title: {
            DisplayValue:
              "Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display",
          },
        },
        Images: {
          Primary: {
            Large: {
              URL: "https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SL1500_.jpg",
            },
          },
        },
        Offers: { Listings: [{ Price: { DisplayAmount: "$999.00" } }] },
        DetailPageURL: "https://www.amazon.com/dp/B08N5KWB9H",
      },
      {
        ASIN: "B09G96TFF7",
        ItemInfo: {
          Title: {
            DisplayValue:
              "iPad Mini (6th Generation): A15 Bionic chip, 8.3-inch",
          },
        },
        Images: {
          Primary: {
            Large: {
              URL: "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SL1500_.jpg",
            },
          },
        },
        Offers: { Listings: [{ Price: { DisplayAmount: "$499.00" } }] },
        DetailPageURL: "https://www.amazon.com/dp/B09G96TFF7",
      },
      {
        ASIN: "B08L5VJYV7",
        ItemInfo: {
          Title: {
            DisplayValue: "Apple iPhone 12, 64GB, Black - Fully Unlocked",
          },
        },
        Images: {
          Primary: {
            Large: {
              URL: "https://m.media-amazon.com/images/I/71fJ-gmBZtL._AC_SL1500_.jpg",
            },
          },
        },
        Offers: { Listings: [{ Price: { DisplayAmount: "$345.00" } }] },
        DetailPageURL: "https://www.amazon.com/dp/B08L5VJYV7",
      },
      {
        ASIN: "B07ZPKZSSC",
        ItemInfo: {
          Title: {
            DisplayValue:
              "Apple AirPods Pro (1st Generation) with MagSafe Case",
          },
        },
        Images: {
          Primary: {
            Large: {
              URL: "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg",
            },
          },
        },
        Offers: { Listings: [{ Price: { DisplayAmount: "$174.00" } }] },
        DetailPageURL: "https://www.amazon.com/dp/B07ZPKZSSC",
      },
      {
      
        ASIN: "B08PPDL386",
        ItemInfo: {
          Title: {
            DisplayValue: "Apple Watch Series 6 (GPS, 40mm) - Space Gray",
          },
        },
        Images: {
          Primary: {
            Large: {
              URL: "https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_SL1500_.jpg",
            },
          },
        },
        Offers: { Listings: [{ Price: { DisplayAmount: "$279.00" } }] },
        DetailPageURL: "https://www.amazon.com/dp/B08PPDL386",
      },
    ];

    // ለሙከራ እንዲሆን ለ 1 ሰከንድ Loading እንዲያሳይ እናድርገው
    setTimeout(() => {
      setProducts(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Loading Products...
      </p>
    );

  return (
    <div className="product-grid">
      {products.map((singleProduct) => (
        <ProductCard key={singleProduct.ASIN} product={singleProduct} />
      ))}
    </div>
  );
};

export default Product;
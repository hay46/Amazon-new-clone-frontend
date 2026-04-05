import React from "react";
import "./CategoryCard.css";
import {Link} from 'react-router-dom'

function CategoryCard(data ) {
  
  return (
    <div className="category-card-container">
     
      <Link to={`/category/${data.title}`} className="category-card-link">

        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imageLink} alt={data.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
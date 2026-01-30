import React from 'react'
import "./Category.css"
import CategoryCard from "./CategoryCard.jsx"
import {Categoryinfo} from "./CategoryFullinfo"
function Category() {
  return (
    <div className="category-container">
      {Categoryinfo.map((item, index) => (
        <CategoryCard key={index} title={item.title} imageLink={item.imageLink} />
      ))}
    </div>
  )
}

export default Category
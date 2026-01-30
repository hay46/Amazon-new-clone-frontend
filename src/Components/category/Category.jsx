import React from 'react'
import "./Category.css"
import CategoryCard from './CategoryCard'
import {Categoryinfo} from './Categoryfullinfo'
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
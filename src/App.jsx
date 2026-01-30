import React from 'react'
import './App.css'
import Header from './Components/header/Header'
import CarouselEffect from './Components/carousel/CarouselEffect'
import Category from './Components/category/Category'
import Product from './Components/product/Product'
function App() {
  return (
    <div>
      <Header />
      <CarouselEffect />
      <Category/>
      <Product/>
    </div>
  )
}

export default App

import React from 'react'
import CarouselEffect from '../../Components/carousel/CarouselEffect'
import Category from '../../Components/category/Category'
import Product from '../../Components/product/Product'
import Card from '../../Components/card/Card'
import Layout from '../../Components/layout/Layout'
function Landing() {
  return (
    <Layout>
   <CarouselEffect />
      <Category/>
      <Card/>
      <Product/>
    </Layout>
  )
}

export default Landing
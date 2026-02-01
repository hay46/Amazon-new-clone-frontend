import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Signup from './pages/Auth/Signup'
import Cart from './pages/cart/Cart'
import Orders from './pages/order/Orders'
import Payment from './pages/payment/Payment'
import Result from './pages/Result/Result'
import ProdactDitail from './pages/ProductDtail/ProductDital'
//import ProductCard from './Components/ProductCard/ProductCard'
import Card from './Components/card/Card'
function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/category/:CategoryName' element={<Result />} />
        <Route path='/Card/:id' element={<ProdactDitail />} />
      </Routes>
    </div>
  )
}

export default Routers
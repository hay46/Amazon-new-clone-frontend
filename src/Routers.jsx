import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Signup from './pages/Auth/Signup'
import Cart from './pages/cart/Cart'
import Order from './pages/order/Order'
import Payment from './pages/payment/Payment'
import Result from './pages/Result/Result'
import ProdactDitail from './pages/ProductDtail/ProdactDitail'
import { BrowserRouter as Router } from 'react-router-dom'  

function Routers() {
  return (
    <div>
    <Router>
        <Routes>
        <Route path='/' element={Landing} /> 
        <Route path='/signup' element={Signup} />
        <Route path='/cart' element={Cart} />
        <Route path='/order' element={Order} />
        <Route path='/payment' element={Payment} />
        <Route path='/result' element={Result} />
        <Route path='/product/:id' element={ProdactDitail} />   

        </Routes>
    </Router>
    </div>
  )
}

export default Routers
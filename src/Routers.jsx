import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Auth from './pages/Auth/Auth'
import Cart from './pages/cart/Cart'
import Orders from './pages/order/Orders'
import Payment from './pages/payment/Payment'
import Result from './pages/Result/Result'
import ProdactDitail from './pages/ProductDtail/ProductDital'

// 1. የ Stripe ላይብረሪዎችን እዚህ Import አድርግ
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// 2. የራስህን Stripe Public Key (pk_test...) እዚህ አስገባ
const stripePromise = loadStripe('pk_test_51SxpkKQlJYiEoQVCcvvx3uwdAXF9mHBHQJFXYV2YmsMEa26Lob3JsxSMY1fCKwq84rmsIA4R8y0DnILpITrbt4cu009mCsYwvH');

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/orders' element={<Orders />} />
      
      {/* 3. የ Payment ገጽን በ Elements ጠቅልለው */}
      <Route 
        path='/payment' 
        element={
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        } 
      />
      
      <Route path='/category/:CategoryName' element={<Result />} />
      <Route path='/Card/:id' element={<ProdactDitail />} />
    </Routes>
  )
}

export default Routers
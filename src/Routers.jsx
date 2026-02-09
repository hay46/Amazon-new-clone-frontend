import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Auth from './pages/Auth/Auth';
import Cart from './pages/cart/Cart';
import Orders from './pages/order/Orders';
import Payment from './pages/payment/Payment';
import Result from './pages/Result/Result';
import ProdactDitail from './pages/ProductDtail/ProductDital';
import ProtectedRoute from './Components/protectedRoute/ProtectedRoute'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/cart' element={<Cart />} />
      
      {/* ጥበቃ የሚደረግላቸው ገጾች */}
      <Route path='/orders' element={
        <ProtectedRoute msg="You must log in to see your orders" redirect="/orders">
          <Orders />
        </ProtectedRoute>
      } />
      
      <Route path='/payment' element={
        <ProtectedRoute msg="You must log in to pay" redirect="/payment">
          <Payment />
        </ProtectedRoute>
      } />
      
      <Route path='/category/:CategoryName' element={<Result />} />
      <Route path='/Card/:id' element={<ProdactDitail />} />
    </Routes>
  );
}

export default Routers;
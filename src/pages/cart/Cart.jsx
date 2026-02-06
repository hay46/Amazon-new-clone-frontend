import React, { useContext } from 'react';
import classes from './cart.module.css';
import { DataContext } from '../../Components/dataprovider/Dataprovider';
import Layout from '../../Components/layout/Layout';
import ProductCard from '../../Components/product/ProductCard';
import { Link } from 'react-router-dom';
import { Type } from '../../utilitiy/Action';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
function Cart() {
  // stateን መጀመሪያ ከcontext እናውጣ
  
  const [ state, dispatch ] = useContext(DataContext);
  const  basket  = state?.basket || [];

  const increment = (item) => {
    
    dispatch({
      type: Type.ADD_TO_BASKET,
      payload: item
    });
  };

  const decrease = (id) => {
    console.log('🔽 DECREASE button clicked. Item ID:', id);
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      payload: id
    });
  };

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h1>Hello</h1>
          <h3>Your shopping basket</h3>
          <hr />
          {
            basket?.length === 0 ? (
              <p>No item in your cart</p>
            ) : (
              // እቃዎቹን አንድ በአንድ ለማውጣት map እንጠቀማለን
              basket?.map((item, index) => {
                const itemId = item.id || item.ASIN;
                return (
                  <section key={itemId || index} className={classes.cart_product}>
                    <ProductCard
                      product={item}  // እዚህ ጋር በProductCardህ ውስጥ ያለውን ስም (product ወይም item) አረጋግጥ
                      renderDesc={true}
                      renderAddToCart={false}
                      flex={true}
                    />
                    <div className={classes.cart_buttons}>
                      <button type="button" onClick={() => increment(item)} className={classes.increment_btn}><IoIosArrowUp/></button>
                      <span className={classes.amount}>{item.amount || 1}</span>
                      <button type="button" onClick={() => decrease(itemId)} className={classes.decrease_btn}><IoIosArrowDown/></button>
                    </div>
                  </section>
                );
              })
            )
          }
        </div>
        {basket.length !== 0 && (
          <div className={classes.cart__summary}>
            <p>Subtotal ({basket?.length} items)</p>
            {
              (() => {
                const parsePrice = (item) => {
                  if (!item) return 0;
                  if (typeof item.price === 'number') return item.price;
                  if (typeof item.price === 'string') {
                    const n = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
                    return isNaN(n) ? 0 : n;
                  }
                  const display = item.Offers?.Listings?.[0]?.Price?.DisplayAmount;
                  if (display) {
                    const n = parseFloat(display.replace(/[^0-9.-]+/g, ''));
                    return isNaN(n) ? 0 : n;
                  }
                  if (item.priceAmount) return Number(item.priceAmount) || 0;
                  return 0;
                };

                const total = basket.reduce((sum, it) => sum + parsePrice(it) * (it.amount || 1), 0);
                const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
                return <p className={classes.subtotal}><strong>{formatted}</strong></p>;
              })()
            }
            <input type="checkbox" />
            <small className={classes.this_order_contains}>this order contains gift</small>
            <span>
              <Link to="/payment" className={classes.checkout__button}>Proceed to Checkout</Link>
            </span>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;

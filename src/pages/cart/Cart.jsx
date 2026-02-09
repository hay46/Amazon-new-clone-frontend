import React from 'react';
import classes from './cart.module.css';
import { useStateValue } from '../../Components/dataprovider/Dataprovider'
import Layout from '../../Components/layout/Layout';
import ProductCard from '../../Components/product/ProductCard';
import { Link } from 'react-router-dom';
import { Type } from '../../utilitiy/Action';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useStateValue();

  // 1. Increment ሲደረግ payload በትክክል ለ reducer መላክ አለበት
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      payload: item // Reducerህ payload.id ስለሚፈልግ item መላክ አለበት
    });
  };

  // 2. Decrease ሲደረግ ID ብቻ ሳይሆን ሙሉው Item ቢላክ ይመረጣል (ለተሻለ logic)
  const decrease = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      payload: id // እዚህ ጋር ID ብቻ መላኩ ትክክል ነው
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
              basket?.map((item, index) => {
                // Item ID በትክክል መያዙን አረጋግጥ
                const itemId = item.id; 
                return (
                  <section key={index} className={classes.cart_product}>
                    <ProductCard
                      product={item}
                      renderDesc={true}
                      renderAddToCart={false}
                      flex={true}
                    />
                    <div className={classes.cart_buttons}>
                      {/* Increment ቁልፍ */}
                      <button 
                        type="button" 
                        onClick={() => increment(item)} 
                        className={classes.increment_btn}
                      >
                        <IoIosArrowUp size={20}/>
                      </button>

                      {/* እዚህ ጋር ነው ቁጥሩ መታየት ያለበት */}
                      <span className={classes.amount}>{item.amount}</span>

                      {/* Decrease ቁልፍ */}
                      <button 
                        type="button" 
                        onClick={() => decrease(item.id)} 
                        className={classes.decrease_btn}
                      >
                        <IoIosArrowDown size={20}/>
                      </button>
                    </div>
                  </section>
                );
              })
            )
          }
        </div>

        {basket.length !== 0 && (
          <div className={classes.cart__summary}>
            {/* ጠቅላላ የእቃ ብዛት (Unique items ሳይሆን total amount) */}
            <p>Subtotal ({basket.reduce((amount, item) => item.amount + amount, 0)} items)</p>
            
            {(() => {
                const parsePrice = (item) => {
                  if (!item) return 0;
                  if (typeof item.price === 'number') return item.price;
                  if (typeof item.price === 'string') {
                    const n = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
                    return isNaN(n) ? 0 : n;
                  }
                  return 0;
                };

                const total = basket.reduce((sum, it) => sum + parsePrice(it) * (it.amount || 1), 0);
                const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
                return <p className={classes.subtotal}><strong>{formatted}</strong></p>;
            })()}

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
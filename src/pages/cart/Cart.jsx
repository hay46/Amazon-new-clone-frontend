import React, { useContext } from 'react';
import classes from './cart.module.css';
import { DataContext } from '../../Components/dataprovider/Dataprovider';
import Layout from '../../Components/layout/Layout';
import ProductCard from '../../Components/product/ProductCard';

function Cart() {
  const {state}=useContext(DataContext);
    const {basket}=state;
    console.log(state.basket.length) // ቀለል ያለ አጻጻፍ

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
              basket?.map((item, i) => (
                <section key={i} className={classes.cart_product}>
                   <ProductCard
                    product={item} // 'item' ሳይሆን 'product' መሆኑን አረጋግጥ
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                </section>
              ))
            )
          }
        </div>
      </section>
    </Layout>
  );
}

export default Cart;
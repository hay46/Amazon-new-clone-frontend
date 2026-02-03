import React, { useContext } from 'react';
import classes from './cart.module.css';
import { DataContext } from '../../Components/dataprovider/Dataprovider';
import Layout from '../../Components/layout/Layout';
import ProductCard from '../../Components/product/ProductCard';

function Cart() {
  // stateን መጀመሪያ ከcontext እናውጣ
  const {state}=useContext(DataContext);
    const {basket}=state;
    console.log("basket in header",basket);

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
              basket?.map((item) => {
                return (
                  <section key={item.id} className={classes.cart_product}>
                    <ProductCard
                      product={item}  // እዚህ ጋር በProductCardህ ውስጥ ያለውን ስም (product ወይም item) አረጋግጥ
                      renderDesc={true}
                      renderAddToCart={false}
                      flex={true}
                    />
                  </section>
                )
              })
            )
          }
        </div>
      </section>
    </Layout>
  );
}

export default Cart;
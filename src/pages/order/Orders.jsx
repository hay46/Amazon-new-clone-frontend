import React, { useState, useEffect } from 'react';
import classes from './Orders.module.css';
import { db } from "../../utilitiy/Firebase";
import { useStateValue } from "../../Components/dataprovider/Dataprovider";
import OrderCard from "../../Components/OrderCard/OrderCard"; // እያንዳንዱን ኦርደር የሚያሳይ
import Layout from '../../Components/layout/Layout';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // ተጠቃሚው ካለ ከ Firebase ዳታውን በጊዜ ቅደም ተከተል እናመጣለን
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h1>Your Orders</h1>
          <div className={classes.orders}>
            {orders?.length === 0 && <p>You don't have any orders yet.</p>}
            
            {orders?.map((eachOrder, i) => (
              <OrderCard key={i} order={eachOrder} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
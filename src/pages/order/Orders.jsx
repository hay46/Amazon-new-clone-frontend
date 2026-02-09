import React, { useState, useEffect } from 'react';
import classes from './orders.module.css';
import { db } from "../../utilitiy/Firebase"; // ያንተ ፋይል
import { useStateValue } from "../../Components/dataprovider/Dataprovider";
import OrderCard from "../../pages/order/OrderCard";
import Layout from '../../Components/layout/Layout';
// እነዚህን Firestore functions መጠቀም የግድ ነው
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // 1. የ collection አድራሻ መለየት
      const ordersRef = collection(db, "users", user?.uid, "orders");
      
      // 2. Query መፍጠር (በጊዜ ቅደም ተከተል እንዲመጣ)
      const q = query(ordersRef, orderBy("created", "desc"));

      // 3. ዳታውን ማዳመጥ (Listen for data)
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      return () => unsubscribe();
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
            {orders?.length === 0 && <p>ትዕዛዝ እስካሁን የለህም።</p>}
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
import React, { useState, useEffect } from 'react';
import classes from './Payment.module.css';
import { useStateValue } from '../../Components/dataprovider/Dataprovider';
import CheckoutProduct from '../Checkout/CheckoutProduct';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../utilitiy/Reducer';
import axios from '../../utilitiy/axios';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../utilitiy/Action';
import Layout from '../../Components/layout/Layout';
// Firestore ጥቅሶች
import { db } from "../../utilitiy/Firebase";
import { doc, setDoc } from "firebase/firestore";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);

  // 1. Client Secret ከ Backend መቀበል
  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const total = getBasketTotal(basket) * 100;
        if (total > 0) {
          const response = await axios({
            method: 'post',
            url: `/payment/create?total=${total}`,
          });
          setClientSecret(response.data.clientSecret);
        }
      } catch (err) {
        console.log("Secret Error:", err);
      }
    };
    getClientSecret();
  }, [basket]);

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setProcessing(true);

  try {
    // 1. የ Stripe ክፍያ ማረጋገጫ መጠየቅ
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    // ውጤቱን ለይተን እንፈትሽ (Destructuring result)
    const { paymentIntent, error: stripeError } = result;

    if (stripeError) {
      // የ Stripe ስህተት ካለ (ለምሳሌ የካርድ ቁጥር ስህተት)
      setError(`Payment Failed: ${stripeError.message}`);
      setProcessing(false);
      return;
    }

    // 2. ክፍያው ከተሳካ (paymentIntent ካለ ብቻ) ዳታቤዝ ውስጥ እናስቀምጣለን
    if (paymentIntent) {
      const orderRef = doc(db, "users", user?.uid, "orders", paymentIntent.id);
      
      await setDoc(orderRef, {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({ type: Type.EMPTY_BASKET });
      navigate('/orders', { replace: true });
    }

  } catch (err) {
    // ሌላ አጠቃላይ ስህተት ካለ
    setError(`Error: ${err.message}`);
    setProcessing(false);
  }
};

  return (
    <Layout>
      <div className={classes.payment}>
        <div className={classes.payment__container}>
          <h1>Checkout ({basket?.length} items)</h1>

          <div className={classes.payment__section}>
            <div className={classes.payment__title}><h3>Delivery Address</h3></div>
            <div className={classes.payment__address}>
              <div>{user?.email}</div>
              <div>123 React Lane</div>
              <div>Addis Ababa, ET</div>
            </div>
          </div>

          <div className={classes.payment__section}>
            <div className={classes.payment__title}><h3>Review Items</h3></div>
            <div className={classes.payment__items}>
              {basket?.map((item, index) => (
                <CheckoutProduct key={index} item={item} flex={true} />
              ))}
            </div>
          </div>

          <div className={classes.payment__section}>
            <div className={classes.payment__title}><h3>Payment Method</h3></div>
            <div className={classes.payment__details}>
              <form onSubmit={handleSubmit}>
                {error && <small style={{ color: "red" }}>{error}</small>}
                <CardElement onChange={handleChange} />

                <div className={classes.payment__priceContainer}>
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      Total Order: <CurrencyFormat
                        renderText={(value) => <h4>{value}</h4>}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </span>
                  </div>
                  <button type="submit" disabled={processing || disabled || succeeded || !clientSecret}>
                    {processing ? <div className={classes.loading}>Processing...</div> : "Buy Now"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
import React, { useState, useEffect } from 'react';
import classes from './Payment.module.css';
import { useStateValue } from '../../Components/dataprovider/Dataprovider';
import CheckoutProduct from '../Checkout/CheckoutProduct'; // ቀድመህ የሰራኸው Component
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../utilitiy/Reducer';
import axios from '../../utilitiy/axios'; // axios instance
import { useNavigate } from 'react-router-dom';
import { Type } from '../../utilitiy/Action';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  // ባስኬቱ በተቀየረ ቁጥር አዲስ የክፍያ ሚስጥር (Client Secret) ከባክኤንድ ይጠይቃል
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    }).then(({ paymentIntent }) => {
      // ክፍያው ሲሳካ
      dispatch({ type: Type.EMPTY_BASKET });
      setProcessing(false);
      navigate('/orders', { replace: true });
    }).catch(err => {
      setError(err.message);
      setProcessing(false);
    });
  };

  return (
    <div className={classes.payment}>
      <div className={classes.payment__container}>
        <h1>Checkout ({basket?.length} items)</h1>
        
        <div className={classes.payment__section}>
          <div className={classes.payment__title}><h3>Delivery Address</h3></div>
          <div className={classes.payment__address}>
            <p>{user?.email}</p>
            <p>123 React Lane, Addis Ababa</p>
          </div>
        </div>

        <div className={classes.payment__section}>
          <div className={classes.payment__title}><h3>Review Items</h3></div>
          <div className={classes.payment__items}>
            {basket.map((item) => (
              <CheckoutProduct key={item.id} item={item} flex={true} />
            ))}
          </div>
        </div>

        <div className={classes.payment__section}>
          <div className={classes.payment__title}><h3>Payment Method</h3></div>
          <div className={classes.payment__details}>
            <form onSubmit={handleSubmit}>
              <CardElement className={classes.card__element} />
              <div className={classes.payment__priceContainer}>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || !stripe || !clientSecret}>
                  {processing ? "Processing..." : "Buy Now"}
                </button>
              </div>
              {error && <div style={{color: "red"}}>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
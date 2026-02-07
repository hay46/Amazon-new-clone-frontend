import React from 'react';
import classes from './OrderCard.module.css';
import CheckoutProduct from '../Checkout/CheckoutProduct'
import CurrencyFormat from 'react-currency-format';
import moment from 'moment'; // ቀኑን በሚያምር ሁኔታ ለማሳየት (npm install moment)

function OrderCard({ order }) {
  return (
    <div className={classes.orderCard}>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className={classes.orderCard__id}>
        <small>{order.id}</small>
      </p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          amount={item.amount}
          flex={true} // በጎን በኩል እንዲታይ
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className={classes.orderCard__total}>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100} // Stripe ሳንቲሞችን ስለሚልክ ለ 100 እናካፍላለን
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default OrderCard;
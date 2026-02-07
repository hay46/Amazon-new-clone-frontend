import React from 'react';
import classes from './CheckoutProduct.module.css'; // ሲ ኤስ ኤስ ሞጁሉን እንፈጥራለን
import { useStateValue } from '../../Components/dataprovider/Dataprovider';
import { Type } from '../../utilitiy/Action';

function CheckoutProduct({ id, image, title, price, rating, amount, flex }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: Type.REMOVE_FROM_BASKET,
            payload: id,
        });
    };

    const addToBasket = () => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            payload: { id, image, title, price, rating }
        });
    };

    return (
        <div className={`${classes.checkoutProduct} ${flex ? classes.product__flex : ''}`}>
            <img className={classes.checkoutProduct__image} src={image} alt={title} />

            <div className={classes.checkoutProduct__info}>
                <p className={classes.checkoutProduct__title}>{title}</p>
                <p className={classes.checkoutProduct__price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={classes.checkoutProduct__rating}>
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
                
                <div className={classes.checkoutProduct__quantity}>
                    <button onClick={removeFromBasket}>-</button>
                    <span>{amount}</span>
                    <button onClick={addToBasket}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutProduct;
import React from 'react'
import './CardInfos.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../dataprovider/Dataprovider.jsx'
import { Type } from '../../utilitiy/Action.js'

function CardInfos({ data }) {
  const [{ basket }, dispatch] = useStateValue();

  const ADD_TO_CART = () => {
  dispatch({
    type: Type.ADD_TO_BASKET,
    payload: {
      id: data.id,
      title: data.title,
      image: data.imageLink,
      price: data.price || 0, // ዋጋ ከሌለው 0 እንዲወስድ
      rating: data.rating || 0,
      description: data.description
    }
  });
};

  return (
    <div className="card-information">
      <Link to={`/Card/${data.id}`}>
        <div className="card-header">
          <h1>{data.title}</h1>
        </div>
        <img src={data.imageLink} alt={data.title} />
        <p className="img-description">{data.description}</p>
        <p className="img-price">Price: ${data.price}</p>
      </Link>
      <button onClick={ADD_TO_CART} className='add-to-cart-props'>
        Add to Cart
      </button>
    </div>
  );
}

export default CardInfos;
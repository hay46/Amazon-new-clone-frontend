import React, { useContext } from 'react'
import './CardInfos.css'
import {CardinformationData} from './CardinformationData.js'
import {Link} from 'react-router-dom'
import { DataContext } from '../dataprovider/Dataprovider.jsx'
import {Type} from '../../utilitiy/Action.js'
function CardInfos ({data}) {
  const [state,dispatch ] = useContext(DataContext);
  const ADD_TO_CART = () => {
    dispatch({ type: Type.ADD_TO_BASKET, payload: data });
  };


  return (
    <div className="card-information">
      <Link to={`/Card/${data.id}`}>
        <h1>{data.id}</h1>
        <span className="card-img">
          <h1>{data.title}</h1>
        </span>
        <img src={data.imageLink} alt={data.title} />
        <p className="img-description">{data.description}</p>
        <p className="shopping know">ProdactDitail</p>
        <p className="img-price">Price: ${data.price}</p>
      </Link>
    
        
         <button onClick={ADD_TO_CART} className='add-to-cart-props'>
            Add to Cart
          </button>
        
          
        
      
      
    </div>
  );
}

export default CardInfos;
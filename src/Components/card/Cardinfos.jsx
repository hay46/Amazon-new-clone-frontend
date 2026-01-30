import React from 'react'
import './CardInfos.css'
import {CardinformationData} from './CardinformationData.js'
import {Link} from 'react-router-dom'

function CardInfos ({data}) {
   // console.log(data.imageLink);
  return (
    <div className="card-information">
      <a href=''>
        <h1>{data.id}</h1>
        <span className="card-img">
          <h1>{data.title}</h1>
        </span>
        <img src={data.imageLink} alt={data.title} />
        <p className="img-description">{data.description}</p>
        <p className="shopping know">shopping Know</p>
      </a>
      
    </div>
  );
}

export default CardInfos;
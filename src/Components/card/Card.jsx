import React from 'react'
import './Card.css'
import {CardinformationData} from './CardinformationData.js'
import CardInfos from './CardInfos.jsx' 
function Card() {
  return (
    <div className="crad-information-to-maping">
      {
      CardinformationData.map((info) => (
        <CardInfos key={info.id} data={info} /> // እዚህ ጋር return እንዲያደርግ በ () ተተክቷል
      ))
      }
    </div>
  );
}

export default Card
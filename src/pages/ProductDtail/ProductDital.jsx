import React, { useEffect, useState } from 'react'
import './ProductDital.css'
import Layout from '../../Components/layout/Layout'
import { useParams } from 'react-router-dom'
import { CardinformationData } from '../../Components/card/CardinformationData' // CardinformationData ፋንታ endpoint ተጠቀም
import axios from 'axios'
import CardInfos from '../../Components/card/CardInfos'

function ProdactDitail() {
  const { id } = useParams(); // ከሊንኩ ላይ ID መቀበል
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 1. ሊንኩ በትክክል መጻፉን አረጋግጥ (ለምሳሌ /products/1)
    axios.get(`${CardinformationData}/${id}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product details:', err);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <Layout>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ padding: "20px" }}>
          {/* 2. እዚህ ጋር አንድ ካርድ ብቻ ነው የሚታየው */}
          <CardInfos 
            product={product} 
          
          />
        </div>
      )}
    </Layout>
  )
}

export default ProdactDitail;
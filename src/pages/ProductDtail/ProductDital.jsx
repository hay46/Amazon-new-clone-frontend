import React, { useEffect, useState } from 'react';
import classes from'./ProductDital.module.css';
import Layout from '../../Components/layout/Layout';
import { useParams } from 'react-router-dom';
import { CardinformationData } from '../../Components/card/CardinformationData';
import axios from 'axios'
import { endpoint } from '../../api/endpoint';
import CardInfos from '../../Components/card/CardInfos';
import Loder from '../../Components/loder/Loder';
function ProdactDitail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ማሳሰቢያ፡ የ API ሊንክህ /products/ የሚል የሚፈልግ ከሆነ እዚህ ጋር ጨምረው
    axios.get(`${endpoint}/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product details:', err);
        setIsLoading(true);
      });
  }, [id]);

  return (
  <Layout>
    <div className={classes.detail_wrapper}> {/* አዲስ wrapper */}
      {isLoading ? (
        <p>Loading...</p>
      ) : product ? (
        <CardInfos 
          data={product}  
          renderAdd={true} 
          flex={true} // ይህ ለ CardInfos ጎን ለጎን እንዲሆን ምልክት ይሰጠዋል
        />
      ) : (
        <p>Product not found!</p>
      )}
    </div>
  </Layout>
);
}

export default ProdactDitail;
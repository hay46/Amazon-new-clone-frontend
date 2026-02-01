import React, { useEffect } from 'react'
import classes from './ProductDital.module.css'
import Layout from '../../Components/layout/Layout'
//import Card from '../../Components/card/Card'
import { useParams } from 'react-router-dom'
import { CardinformationData } from '../../Components/card/CardinformationData.js'
import axios from 'axios'

function ProdactDitail() {
  const { id } = useParams();
  useEffect(() => {
    // Fetch product details using the id
   axios.get(`${CardinformationData}/${id}`)
      .then(response => {
        console.log('Product Details:', response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);
    

  return (

    <Layout>
<div className={classes.container}>Product Detail for ID: {id}</div>
    </Layout>
    
  )
}

export default ProdactDitail
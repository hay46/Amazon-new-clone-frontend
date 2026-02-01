import React, { useEffect ,useState} from 'react'
import './ProductDital.css'
import Layout from '../../Components/layout/Layout'
import { useParams } from 'react-router-dom'
import { CardinformationData } from '../../Components/card/CardinformationData.js'
import axios from 'axios'
import Card from '../../Components/card/Card.jsx'
function ProdactDitail() {
  const { id } = useParams();
  const [product, setproduct]=useState({})
  useEffect(() => {
    // Fetch product details using the id
   axios.get(`${CardinformationData}/${id}`)
      .then(response => {

        setproduct(response.data)
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);
    

  return (

    <Layout>

    <div>
<Card product={product} id={id}/>
    </div>
    </Layout>
    
  )
}

export default ProdactDitail
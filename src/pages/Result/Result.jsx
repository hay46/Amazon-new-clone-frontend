import React, { useState, useEffect } from 'react'
import classes from './Result.module.css'
import Layout from '../../Components/layout/Layout'
import { useParams } from 'react-router-dom'
import { endpoint } from '../../api/endpoint'
import axios from 'axios'
import CategoryCard from '../../Components/category/CategoryCard'
function Result() {
  const { CategoryName } = useParams()
  const [Result, setresult] = useState([])

  useEffect(() => {
    let canceled = false
    if (!CategoryName) return
    axios.get(`${endpoint}/products/category/${CategoryName}`)
      .then(res => { if (!canceled) setresult(res.data) })
      .catch(err => { if (!canceled) console.error(err) })
    return () => { canceled = true }
  }, [CategoryName])

  return (
    
    <Layout className={classes.container}>
      {Result.length > 0 ? (
        <div className={classes.resultContainer}>
          <h2>Results for Category: {CategoryName}</h2>
          <div className={classes.productGrid}>
            {Result?.map(product => (
              <div key={product.id} className={classes.productCard}>
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} className={classes.productImage} />
                <p className={classes.productPrice}>${product.price}</p>

              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>
<CategoryCard
Result={Result}
/>
        </p>
      )}
    </Layout>
  )
}

export default Result
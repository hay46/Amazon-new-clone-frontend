import React from 'react'
import classes from './Header.module.css'
function LowerHeader() {
  return (
    <div className={classes.lowerHeader}>
      <div className={classes.lowerHeaderLeft}>
        <p>Deliver to</p>
        <div className={classes.lowerHeaderLeftIcon}>
          <span>Ethiopia</span>
        </div>
      </div>
      <div className={classes.lowerHeaderRight}>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </div>
  )
}

export default LowerHeader
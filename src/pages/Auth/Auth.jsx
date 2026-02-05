import React from 'react'
import classes from './signup.module.css'
import { Link } from 'react-router-dom'
function Auth() {
  return (
    <section className={classes.container}>
     <div >
{/* the amazon logo of signup and signin page */}
<Link>
<img src={} alt="" />
</Link>
    </div>
    <div className={classes.signup_and_signUp_page}>
      <div className={classes.sign_in}>
        {/* the sign-in page */}
        <div className={classes.input_page}>
      {/*the input page */}
      <div>{/*the email */}</div>
      <div>{/*the password page */}</div>
      <div>{/*the sign in button*/}</div>
        </div>
      </div>
<div>
  {/*the signup page*/}
  <p></p>
  <button>{/*create account */}</button>
</div>
    </div>
    </section>
    
  )
}

export default Auth
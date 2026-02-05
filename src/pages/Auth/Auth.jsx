import React, { useState, useContext } from 'react';
import classes from './signup.module.css';
import { Link } from 'react-router-dom';
import Amazon_logo from '../../assets/10001.jpeg';
import {auth} from '../../utilitiy/Firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {DataContext} from '../../Components/dataprovider/Dataprovider'
function Auth() {
   const [Email, setEmail ] = useState("")
   const [password, setpassword]= useState("")
   //const [Error,setError]=useState("")

const [{user},dispatch] = useContext(DataContext);

// console.log(user)

   const authHandler=async(e)=>{
    e.preventDefault();
if(e.target.name=="sign in"){
signInWithEmailAndPassword(auth,Email,password).then((userInfo)=>{

dispatch({
  type: "SET_USER",
  user: userInfo.user
});
}).catch((err)=>{
  console.log(err)
})


}else{
createUserWithEmailAndPassword(auth,Email,password).then((userInfo)=>{

dispatch({
  type: "SET_USER",
  user: userInfo.user
});
}).catch((err)=>{
  console.log(err)
})
}


   };
   
  return (
    <section className={classes.login}>
      {/* Amazon Logo */}
      <Link to="/">
        <img 
          className={classes.login__logo} 
          src={Amazon_logo} 
          alt="Amazon logo" 
        />
      </Link>

      {/* Sign-in Container */}
      <div className={classes.login__container}>
        <h1>Sign-in</h1>
        
        <form>
         <label htmlFor="Email">Email:</label>
          <input 
          type="email" 
          id="Email" 
          name="Email" 
          value={Email}
          onChange={(e)=>setEmail(e.target.value)}
          />

           <label htmlFor="password">password:</label>
          <input 
          type="password"
           id="password" 
           name="password" 
            value={password}
             onChange={(e)=>setpassword(e.target.value)}
           />

          <button 
          type="submit" 
          onClick={authHandler}
          name="signin"
          className={classes.login__signInButton}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. 
          Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button 
        type="submit"
        onClick={authHandler}
        name=" signup"
        className={classes.login__registerButton}>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
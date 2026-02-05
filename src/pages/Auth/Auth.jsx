import React, { useState, useContext } from 'react';
import classes from './signup.module.css';
import { Link } from 'react-router-dom';
import Amazon_logo from '../../assets/10001.jpeg';
import { auth } from '../../utilitiy/Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from '../../Components/dataprovider/Dataprovider';

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // ስህተቶችን ለተጠቃሚው ለማሳየት

  const [{ user }, dispatch] = useContext(DataContext);

  const authHandler = async (e) => {
    e.preventDefault();
    
    // የትኛው በተን እንደተጫነ ለማወቅ (ስሙን እናጽዳው - trim)
    const action = e.target.name.trim();

    if (action === "sign in") {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: "SET_USER", // እዚህ ጋር String አድርገው
            user: userInfo.user
          });
        })
        .catch((err) => {
          setError(err.message);
          console.log(err.message);
        });

    } else {
      // Sign Up (Create Account) Logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: "SET_USER", // እዚህ ጋር String አድርገው
            user: userInfo.user
          });
        })
        .catch((err) => {
          setError(err.message);
          console.log(err.message);
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img className={classes.login__logo} src={Amazon_logo} alt="Amazon logo" />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign-in</h1>
        {/* ስህተት ካለ እዚህ ጋር ይወጣል */}
        {error && <small style={{ color: "red", paddingBottom: "10px", display: "block" }}>{error}</small>}
        
        <form>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button 
            type="submit" 
            onClick={authHandler}
            name="sign in"
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
          name="sign up"
          className={classes.login__registerButton}>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
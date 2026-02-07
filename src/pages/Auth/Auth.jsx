import React, { useState} from 'react';
import classes from './signup.module.css';
import Amazon_logo from '../../assets/10001.jpeg';
import { Link, useNavigate,useLocation} from 'react-router-dom';
import { auth } from '../../utilitiy/Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useStateValue } from '../../Components/dataprovider/Dataprovider'
import {Type} from '../../utilitiy/Action'
import {ClipLoader} from "react-spinners"
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading,setLoading]=useState({
    signIn:false,
    signUp:false
  });
  
  const navigate = useNavigate();
  const { state } = useLocation();
  // አሁን መረጃው በትክክል ይገባል []
  const [{ basket, user }, dispatch] = useStateValue();

  const authHandler = async(e) => {
    e.preventDefault();
    if ( e.target.name.trim() === "signIn") {
      // firebase auth
setLoading({...loading, signIn: true});
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          
          navigate(state?.redirect || "/"); // ወደ Home ይመልሰዋል
        })
        .catch((err) => {
          setError(err.message);
     setLoading({...loading, signIn: false});
        })
    } else {
     // Register Logic
      setLoading({...loading, signUp:true})
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          setLoading({...loading, signUp:false});
         navigate(state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
      setLoading({...loading, signUp:false })
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
        {error &&<small style={{paddingTop: "5px",color:"red"}}>{error}</small>}
        <form >
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button 
          type="submit" 
          onClick={authHandler}
          name="signIn" 
          className={classes.login__signInButton}
          >
            {
            loading.signIn? 
            <ClipLoader color="#000" size = {15}/>:"Login"
            }
           </button>
        </form>
        <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.</p>

        <button 
        type="submit" 
        onClick={authHandler} 
        name="signUp" 
        className={classes.login__registerButton}
        >
          {
            loading.signUp? <ClipLoader  color="#000" size = {15}/> : "  Create your Amazon Account"}
        </button>
        {error &&<small style={{paddingTop: "5px",color:"red"}}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;
import React, { useState, useContext } from 'react';
import classes from './signup.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Amazon_logo from '../../assets/10001.jpeg';
import { auth } from '../../utilitiy/Firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from '../../Components/dataprovider/Dataprovider';
import {Type} from '../../utilitiy/Action'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  // አሁን መረጃው በትክክል ይገባል []
  const [{ user }, dispatch] = useContext(DataContext);

  const authHandler = async (e) => {
    e.preventDefault();
    const actionName = e.nativeEvent.submitter.name; // የትኛው በተን እንደተጫነ ለማወቅ

    if (actionName === "signin") {
      // Login Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          navigate("/"); // ወደ Home ይመልሰዋል
        })
        .catch((err) => setError(err.message));

    } else {
      // Register Logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user
          });
          navigate("/");
        })
        .catch((err) => setError(err.message));
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img className={classes.login__logo} src={Amazon_logo} alt="Amazon logo" />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign-in</h1>
        {error && <small style={{ color: "red", display: "block", marginBottom: "10px" }}>{error}</small>}
        
        <form onSubmit={authHandler}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit" name="signin" className={classes.login__signInButton}>
            Sign In
          </button>
        </form>

        <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.</p>

        <button type="submit" onClick={authHandler} name="signup" className={classes.login__registerButton}>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
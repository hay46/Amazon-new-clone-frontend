import React, { useEffect } from 'react';
import Routers from './Routers.jsx';
import { useStateValue } from './Components/dataprovider/Dataprovider.jsx';
import { auth } from "./utilitiy/Firebase.js"; 
import { Type } from "./utilitiy/Action.js";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: Type.SET_USER, user: authUser });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Elements stripe={stripePromise}>
      <Routers />
    </Elements>
  );
}

export default App;
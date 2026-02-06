import React, { useContext, useEffect } from 'react';
import './App.css';
import Routers from './Routers.jsx';
import { DataContext } from './Components/dataprovider/Dataprovider.jsx';
import { auth } from "./utilitiy/Firebase.js"; 
import { Type } from "./utilitiy/Action.js";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    // Firebase ተጠቃሚው መግባቱን ወይም መውጣቱን በራሱ የሚከታተልበት መንገድ
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // ተጠቃሚው ገብቷል (Login ሆኗል)
        dispatch({
          type: Type.SET_USER,
          user: authUser
        });
      } else {
        // ተጠቃሚው አልገባም ወይም ወጥቷል (Logout ሆኗል)
        dispatch({
          type: Type.SET_USER,
          user: null
        });
      }
    });

    // Component-ው ሲዘጋ ክትትሉን ለማቆም (Cleanup)
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <Routers />
    </div>
  );
}

export default App;
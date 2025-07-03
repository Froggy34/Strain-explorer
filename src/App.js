import React, { useState, useEffect } from "react";
import StrainSearch from "./components/StrainSearch";
import Auth from "./components/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import "./styles/global.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="app-container">
      <h1>Strain Explorer 🌿</h1>
      <Auth user={user} setUser={setUser} />
      <StrainSearch user={user} />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import socialMediaAuth from "./service/auth";
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from "./config/authMethods";

export default function Root() {
  const [user, setUser] = useState(null);

  const handleLogin = async (provider) => {
    try {
      const res = await socialMediaAuth(provider);
      console.log("Authentication successful:", res);
      setUser(res); 
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  const handleLogout = () => {
    setUser(null); 
  };

  return (
    <div className="App">
      {user ? (
        <div>
            <img
            src={user.photoURL} 
            alt={user.displayName}
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
          <h2>Welcome, {user.displayName}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          
          <button onClick={() => handleLogin(githubProvider)}>Github</button>
          <button onClick={() => handleLogin(googleProvider)}>Google</button>
          <button onClick={() => handleLogin(facebookProvider)}>Facebook</button>
        </div>
      )}
    </div>
  );
}

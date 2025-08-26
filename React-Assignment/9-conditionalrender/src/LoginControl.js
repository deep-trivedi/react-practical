import React, { useState } from "react";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isLoggedIn ? (
        <>
          <h2>Welcome, User!</h2>
          <button 
            onClick={handleLogout} 
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Please log in</h2>
          <button 
            onClick={handleLogin} 
            style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default LoginControl;

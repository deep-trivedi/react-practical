import logo from './logo.svg';
import React, { useContext } from "react";

import { AuthContext } from "./AuthContext";
import Login from "./Login";

import './App.css';

function App() {
    const { user, logout } = useContext(AuthContext);

  return (
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      {user ? (
        <>
          <h1>Welcome, {user.name} 🎉</h1>
          <button onClick={logout} style={{ padding: "10px 20px" }}>
            Logout
          </button>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

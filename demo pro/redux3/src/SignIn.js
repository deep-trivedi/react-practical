import React, { useState } from "react";
import "./App.css";
import { app } from "./anything";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); 
    setMessage("");

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("Login Success:", res.user);
        setMessage("✅ Login Successful!");
      })
      .catch((err) => {
        console.error("Error:", err.message);
        setMessage("❌ " + err.message);
      });
  };

  return (
    <div className="App">
      <h2>Login Form</h2>

      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "250px", margin: "auto" }}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;

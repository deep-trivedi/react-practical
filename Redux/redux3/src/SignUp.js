import React, { useState } from "react";
import "./App.css";
import { app } from "./anything";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setMessage("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User Created:", res.user);
        setMessage("✅ Sign-Up Successful!");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.error("Error:", err.message);
        setMessage("❌ " + err.message);
      });
  };

  return (
    <div className="App">
      <h2>Sign Up</h2>

      <form
        onSubmit={handleSignup}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "250px",
          margin: "auto",
        }}
      >
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

        <button type="submit">Sign Up</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Signup;

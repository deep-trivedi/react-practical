import React from "react";
import './App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { app } from "./anything"; // your Firebase config

const auth = getAuth(app);
const db = getDatabase(app);

function App() {
  const navigate = useNavigate();

  const clickSignUp = () => {
    const email = "manoj@gmail.com"; // hardcoded email
    const password = "iuyuiy";       // hardcoded password
    const username = "DefaultUser";   // hardcoded username

    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log("Signed Up:", res.user);
        const userId = res.user.uid;

        // Save extra info in Realtime Database
        set(ref(db, "users/" + userId), {
          email: email,
          username: username,
          profile_picture: "https://via.placeholder.com/150"
        });

        navigate("/SignUp"); // redirect after signup
      })
      .catch(err => console.error("SignUp Error:", err.message));
  };

  return (
    <div className="App">
      <h2>Firebase Sign-Up Demo</h2>
      <button onClick={clickSignUp}>Sign Up</button>
    </div>
  );
}

export default App;

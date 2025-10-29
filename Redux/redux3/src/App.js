import React from "react";
import './App.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "./anything";

const auth = getAuth(app);

function App() {
  const navigate = useNavigate();

  const clickSignIn = () => {
    signInWithEmailAndPassword(auth, "hux@gmail.com", "iuyuiy")
      .then(res => {
        console.log(res);
        navigate("/SignIn"); 
      })
      .catch(err => console.error(err.message));
  };

  const clickSignUp = () => {
    createUserWithEmailAndPassword(auth, "hux@gmail.com", "iuyuiy")
      .then(res => {
        console.log(res);
        navigate("/SignUp"); 
      })
      .catch(err => console.error(err.message));
  };

  return (
    <div className="App">
      <button onClick={clickSignIn}>Sign In</button>
      <button onClick={clickSignUp}>Sign Up</button>
    </div>
  );
}

export default App;

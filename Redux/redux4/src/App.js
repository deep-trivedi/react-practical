import React, { useContext } from "react";
import './App.css';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { app } from "./anything";
import { UserContext } from "./UserContext";

const auth = getAuth(app);
const db = getDatabase(app);

function App() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // useContext to store user globally

  // Sign In function
  const clickSignIn = () => {
    signInWithEmailAndPassword(auth, "manoj@gmail.com", "iuyuiy")
      .then(res => {
        console.log("Signed In:", res.user);
        const userId = res.user.uid;

        // Get data from Realtime Database (optional)
        setUser({
          uid: userId,
          email: "manoj@gmail.com",
          username: "DefaultUser",
          profile_picture: "https://via.placeholder.com/150"
        });

        navigate("/SignIn"); 
      })
      .catch(err => console.error("SignIn Error:", err.message));
  };

  // Sign Up function
  const clickSignUp = () => {
    createUserWithEmailAndPassword(auth, "manoj@gmail.com", "iuyuiy")
      .then(res => {
        console.log("Signed Up:", res.user);
        const userId = res.user.uid;

        // Store extra user info in Realtime Database
        set(ref(db, "users/" + userId), {
          email: "manoj@gmail.com",
          username: "DefaultUser",
          profile_picture: "https://via.placeholder.com/150"
        });

        // Update context
        setUser({
          uid: userId,
          email: "manoj@gmail.com",
          username: "DefaultUser",
          profile_picture: "https://via.placeholder.com/150"
        });

        navigate("/SignUp"); 
      })
      .catch(err => console.error("SignUp Error:", err.message));
  };

  return (
    <div className="App">
      <h2>Firebase Auth Demo</h2>
      <button onClick={clickSignIn}>Sign In</button>
      <button onClick={clickSignUp}>Sign Up</button>
    </div>
  );
}

export default App;

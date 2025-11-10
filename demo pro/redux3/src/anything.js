// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAujhPsBJU--CedeCTH7LQdwm_EbM4U5T0",
  authDomain: "testpro-d9656.firebaseapp.com",
  projectId: "testpro-d9656",
  storageBucket: "testpro-d9656.firebasestorage.app",
  messagingSenderId: "869272209169",
  appId: "1:869272209169:web:4115d1177dfce0b675eeb0",
  measurementId: "G-5FCEXMDJBC",
    databaseURL: "https://testpro-d9656-default-rtdb.firebaseio.com/"  

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

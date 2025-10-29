import logo from './logo.svg';
import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import Navbar from "./Navbar";
import Home from "./Home";
import './App.css';
function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Home />
    </div>
  );
}
function App() {
  return (
   <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

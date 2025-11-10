import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>Redux Counter App</h1>
        <nav>
          <Link to="/">Counter</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

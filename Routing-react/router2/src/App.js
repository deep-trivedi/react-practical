import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div>
        <nav style={{
          backgroundColor: "#333",
          padding: "10px",
          textAlign: "center"
        }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </nav>

        {/* Page Content */}
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const linkStyle = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
  fontSize: "18px"
};

export default App;

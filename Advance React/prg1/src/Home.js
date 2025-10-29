import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`home ${theme}`}>
      <h3>Welcome! The current theme is "{theme}" mode 🌗</h3>
    </div>
  );
}

export default Home;

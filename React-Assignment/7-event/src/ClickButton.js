import React, { useState } from "react";

function ClickButton() {
  const [text, setText] = useState("Not Clicked");

  const handleClick = () => {
    setText("Clicked!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{text}</h2>
      <button 
        onClick={handleClick} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Click Me
      </button>
    </div>
  );
}

export default ClickButton;

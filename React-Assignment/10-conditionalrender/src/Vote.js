import React, { useState } from "react";

function Vote() {
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Check Voting Eligibility</h2>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={handleChange}
        style={{ padding: "8px", fontSize: "16px", width: "200px" }}
      />
      <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
        {age !== "" ? (
          age >= 18 ? (
            <span style={{ color: "green" }}>✅ You are eligible to vote</span>
          ) : (
            <span style={{ color: "red" }}>❌ You are not eligible to vote</span>
          )
        ) : (
          "Enter your age above"
        )}
      </div>
    </div>
  );
}

export default Vote;

import React from "react";

function Usercard({ name, age, location }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    width: "250px",
    margin: "10px auto",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#f9f9f9"
  },
  name: {
    margin: "0 0 10px 0",
    color: "#333"
  }
};

export default Usercard;

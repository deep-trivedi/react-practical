import React, { useState } from "react";

function InputForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form>
        <label>
          Enter text:{" "}
          <input
            type="text"
            value={value}
            onChange={handleChange}
            style={{ padding: "8px", fontSize: "16px" }}
          />
        </label>
      </form>
      <h2>Live Output: {value}</h2>
    </div>
  );
}

export default InputForm;

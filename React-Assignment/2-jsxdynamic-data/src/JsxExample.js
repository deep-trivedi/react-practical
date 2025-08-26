import React from "react";

function JsxExample() {
  const topic = "JSX";
  const description = "JSX allows us to write HTML elements in JavaScript and place them in the DOM.";

  return (
    <div>
      <h1>Welcome to {topic}</h1>

      <p>{description}</p>
    </div>
  );
}

export default JsxExample;

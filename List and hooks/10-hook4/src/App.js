import React from "react";
import RenderSin from "./RenderSin";

function App() {
  return (
    <div className="App text-center">
      <h1 className="text-2xl font-bold mt-4">Avoid Re-renders with useRef</h1>
      <RenderSin />
    </div>
  );
}

export default App;

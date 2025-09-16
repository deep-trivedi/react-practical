import React, { useState } from "react";
import LifeCycleDemo from "./LifeCycleDemo";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="App text-center">
      <h1 className="text-2xl font-bold mt-4">My React App</h1>

      <button
        onClick={() => setShowComponent(!showComponent)}
        className="bg-red-500 text-white px-4 py-2 rounded shadow mt-4"
      >
        {showComponent ? "Unmount Component" : "Mount Component"}
      </button>

      {/* Conditionally render the component */}
      {showComponent && <LifecycleDemo />}
    </div>
  );
}

export default App;

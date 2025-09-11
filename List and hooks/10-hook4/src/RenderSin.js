import React, { useState, useRef } from "react";

function RenderSin() {
  const [count, setCount] = useState(0);

  const renders = useRef(0);

  const incrementRenderCount = () => {
    renders.current += 1;
    console.log("Render count updated (but no re-render triggered):", renders.current);
  };

  return (
    <div className="text-center mt-6">
      <h2 className="text-xl font-semibold mb-4">Count: {count}</h2>
      <h3 className="mb-4">Render count (tracked with useRef): {renders.current}</h3>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded shadow mr-2"
      >
        Increment Count
      </button>

      <button
        onClick={incrementRenderCount}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow"
      >
        Increment Render Tracker
      </button>
    </div>
  );
}

export default RenderSin;

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mt-6">
      <h2 className="text-xl font-semibold mb-4">Counter: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded shadow mr-2"
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 text-white px-4 py-2 rounded shadow"
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;

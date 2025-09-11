import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";

function Counter() {
  const count = useSelector((state) => state.counter.value); // select counter value
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-6">
      <h2 className="text-xl font-semibold mb-4">Counter: {count}</h2>

      <button
        onClick={() => dispatch(increment())}
        className="bg-green-500 text-white px-4 py-2 rounded shadow mr-2"
      >
        Increment
      </button>

      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-500 text-white px-4 py-2 rounded shadow"
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;

// @ts-types="@types/react"
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className="py-4">{count}</p>
      <button
        className="py-0.5 px-2 rounded-md bg-gray-300 text-sm"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

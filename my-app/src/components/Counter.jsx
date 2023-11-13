import React, { useState } from "react";

export default function Counter({total}) {
  const [count, setCounter] = useState(0);


  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button
        className="button"
        onClick={() => {
          setCounter((prev) => prev + 1);
          onclick();
        }}
      >
        Add+
      </button>
    </div>
  );
}

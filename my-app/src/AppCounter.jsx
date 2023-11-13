import React, { useState } from "react";

import Counter from "./components/Counter";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter total = {count} onClick = {setCount}/>
        <Counter total = {count} onClick = {setCount}/>
      </div>
    </div>
  );
}

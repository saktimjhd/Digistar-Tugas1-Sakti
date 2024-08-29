import React, { useState } from "react";
import "../styles/Counter.css";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  if (count < 0) {
    setCount(0);
  }

  return (
    <div className="counter">
      <div className="con-count">
        <h5>Count :</h5>
        <div>{count}</div>
      </div>
      <div className="con-button">
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
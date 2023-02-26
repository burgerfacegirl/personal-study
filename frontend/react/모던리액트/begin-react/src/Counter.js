import React from "react";
import { useState } from "react";

function Counter() {
  const [num, setNum] = useState(0);
  function increaseNum() {
    setNum((prevNumber) => prevNumber + 1);
  }
  function decreaseNum() {
    setNum((prevNumber) => prevNumber - 1);
  }
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
    </div>
  );
}

export default Counter;

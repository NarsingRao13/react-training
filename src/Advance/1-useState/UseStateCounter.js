import React, { useState } from "react";

function UseStateCounter() {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 2000);
  };
  return (
    <div>
      <h1>Regular Counter</h1>
      <h2>{value}</h2>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setValue(0);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase
      </button>

      <h1>Complex Regular Counter</h1>
      <h2>{value}</h2>
      <button onClick={complexIncrease}>Increase</button>
    </div>
  );
}

export default UseStateCounter;

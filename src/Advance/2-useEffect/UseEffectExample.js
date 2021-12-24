import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value >= 1) document.title = `New Message(${value})`;
    console.log("call useeffect");
  });
  useEffect(() => {
    //setValue(value + 2);
    console.log("second useeffect");
  });
  console.log("render component");
  return (
    <>
      <h2>{value}</h2>
      <button
        type="button"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
    </>
  );
}

export default UseEffectExample;

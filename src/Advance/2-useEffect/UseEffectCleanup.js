import React, { useEffect, useState } from "react";

function UseEffectCleanup() {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });
  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  );
}

export default UseEffectCleanup;

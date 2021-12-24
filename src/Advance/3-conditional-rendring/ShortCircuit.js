import React, { useState } from "react";

function ShortCircuit() {
  const [text, setText] = useState("v");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "firstValue";
  const secondValue = text && "secondValue";
  return (
    <>
      <h1>{firstValue}</h1>
      <h2>{secondValue}</h2>
      <h2>{text && "John Doe"}</h2>
      <button type="button" onClick={() => setIsError(!isError)}>
        Toggel Error
      </button>
      {isError && <h2>Error..</h2>}
      {isError ? <p>There is an error..</p> : <p>no error</p>}
    </>
  );
}

export default ShortCircuit;

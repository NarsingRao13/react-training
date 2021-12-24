import React, { useState } from "react";

const UseStateExample = () => {
  let title = "Random Title";
  const [text, setText] = useState("Random Title");
  const onClickHandler = () => {
    console.log(text);
    if (text === "Random Title") {
      setText("Title");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" onClick={onClickHandler}>
        Button
      </button>
    </React.Fragment>
  );
};

export default UseStateExample;

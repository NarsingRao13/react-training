import React, { useState } from "react";

export default function UseStateObject() {
  const [people, setPeople] = useState({
    name: "petter",
    age: 24,
    message: "random messsage",
  });
  const [name, setName] = useState("petter");
  const [age, setAge] = useState(12);
  const [message, setMessage] = useState("random message");
  const changeMessage = () => {
    //setPeople({ ...people, message: "Hello" });
    setMessage("hello");
  };
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button type="button" onClick={changeMessage}>
        change message
      </button>
    </div>
  );
}

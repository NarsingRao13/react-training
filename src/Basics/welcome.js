import React from "react";
import { Person } from "./Greetings";
import { Greeting3 } from "./Greetings";

function Welcome1() {
  return <h1>Hey!! This is the first component.</h1>;
}

export function Welcome2() {
  return (
    <div>
      <h1>Heyy</h1>
    </div>
  );
}

export function Welcome3() {
  return (
    <React.Fragment>
      <h1>Heyy</h1>
    </React.Fragment>
  );
}

export function Welcome4() {
  return (
    <div>
      <h2>Mr.Rao</h2>
      <p>Heyy Rao!! Have a great day</p>
    </div>
  );
}

//Nested Component
export function Welcome5() {
  return (
    <div>
      <Person />
      <Greeting3 />
    </div>
  );
}

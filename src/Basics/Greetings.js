import React from "react";
import { Welcome5 } from "./welcome";

export const Greeting1 = () => {
  return React.createElement("h2", "", "Hello World!!");
};

export const Greeting2 = () => {
  return React.createElement(
    "h2",
    "",
    React.createElement("ul", "", React.createElement("li", "", "Hello People"))
  );
};

export const Greeting3 = () => {
  return <p>Heyy Rao!! Have a great day</p>;
};

export const Greeting4 = () => {
  return <Welcome5 />;
};

export const Person = () => <h2>Mr.Rao</h2>;

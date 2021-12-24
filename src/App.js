import React from "react";
import Advance from "./Advance/Advance";
import "./App.css";
import Basics from "./Basics/Basics";
import ClassComponentExample from "./components/class-components/classcomponentexample";
import Counter from "./components/class-components/counter";
import Message from "./components/class-components/message";

export default function App() {
  return (
    <div className="App">
      <Advance />
      <ClassComponentExample name="Narsing" />
      <Message />
      <Counter />
    </div>
  );
}

/* ReactDome.render(<Welcome5 />, document.getElementById("root"));
ReactDome.render(<Greeting4 />, document.getElementById('root')); 
ReactDom.render(<BookList />, document.getElementById("root")); 
ReactDom.render(<SingleBook />, document.getElementById("root"));*/

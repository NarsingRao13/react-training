import React from "react";
import ClassComponentExample from "../components/class-components/classcomponentexample";
import ClassClick from "./class-components/classclick";
import EventBinding from "./class-components/EventBinding";
import Example from "./functional-components/example";
import FunctionClick from "./functional-components/functionclick";
import Lifecycle from "./Life-Cycles/lifecycle";

export default function Components() {
  return (
    <div>
      <ClassComponentExample name="Narsing" />
      <Example />
      <FunctionClick />
      <ClassClick />
      <EventBinding />
      <Lifecycle />
    </div>
  );
}

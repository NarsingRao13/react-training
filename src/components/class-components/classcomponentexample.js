import { Component } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import { UserProvider } from "./user-context";

class ClassComponentExample extends Component {
  render() {
    return (
      <>
        Class Component {this.props.name}
        <UserProvider value="Rao">
          <ComponentA />
        </UserProvider>
        <ComponentB />
        <ComponentC />
      </>
    );
  }
}

export default ClassComponentExample;

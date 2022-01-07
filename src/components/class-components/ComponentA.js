import React, { Component } from "react";
import { UserConsumer } from "../class-components/user-context";

export default class ComponentA extends Component {
  render() {
    return (
      <UserConsumer>
        {(name) => {
          return <div>Hello {name}</div>;
        }}
      </UserConsumer>
    );
  }
}

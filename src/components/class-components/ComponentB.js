import React, { Component } from "react";
import { UserConsumer } from "./user-context";

export default class ComponentB extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(name) => {
            return <div>Heyyy {name}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

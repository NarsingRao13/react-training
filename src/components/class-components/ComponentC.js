import React, { Component } from "react";
import UserContext from "./user-context";

export default class ComponentC extends Component {
  static contextType = UserContext;
  render() {
    return <div>ComponentC context {this.context}</div>;
  }
}

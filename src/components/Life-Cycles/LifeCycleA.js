import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ListCycleA",
    };
    console.info("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.info("LifeCycleA getDerivedStateFromProps");
    return null;
  }

  changeState = () => {
    this.setState({ name: "rao" });
  };

  render() {
    console.info("LifeCycleA render");
    return (
      <div>
        {this.state.name}
        <button onClick={this.changeState}>change state</button>
        <LifeCycleB />
      </div>
    );
  }

  componentDidMount() {
    console.info("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.info("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.info("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.info("LifeCycleA componentDidUpdate");
  }
}

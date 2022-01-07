import React, { Component } from "react";

export default class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
  }

  clickHandler() {
    console.info(this);
    this.setState({ message: "Bye" });
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.clickHandler()}>Event Bind Example</button>
      </div>
    );
  }
}

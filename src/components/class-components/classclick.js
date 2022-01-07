import React, { Component } from "react";

export default class ClassClick extends Component {
  clickHandler() {
    console.info("class click");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Event Click</button>
      </div>
    );
  }
}

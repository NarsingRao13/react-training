import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.info("call back count " + this.state.count);
      }
    );

    // this.setState((prevState) => {
    //   count: prevState.count + 1;
    // });
    // console.info(this.state.count);
  }

  render() {
    return (
      <div>
        <h1>count- {this.state.count}</h1>
        <button onClick={() => this.increment()}>increment</button>
      </div>
    );
  }
}

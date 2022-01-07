import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "ListCycleB",
        };
        console.info("LifeCycleB constructor");
      }
    
      static getDerivedStateFromProps(props, state) {
        console.info("LifeCycleB getDerivedStateFromProps");
        return null;
      }
    
      render() {
        console.info("LifeCycleB render");
        return <div>{this.state.name}</div>;
      }
    
      componentDidMount() {
        console.info("LifeCycleB componentDidMount");
      }
}

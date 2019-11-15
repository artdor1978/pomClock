import React, { Component } from "react";
import "./Main.css";

const Stringify = props => (
  <div className="letterStyle" id={props.id}>
    {props.children}
  </div>
);
const Counter = props => <div className="counter">{props.display}</div>;

class MainState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.updateCount = this.updateCount.bind(this);
  }
  updateCount = val => this.setState({ count: val });
  render() {
    const stateTools = [this.state.count,this.updateCount];
    return( {this.props.render(stateTools)});
  }
}

const App = () => {
  return (
    )
}

export default Main;

import React, { useState } from "react";
import "./Main.css";

const Stringify = props => <div className="letterStyle" {...props} />;
const Counter = props => <div className="counter" {...props} />;
const Clickers = props => <div className="clickers" {...props} />;

function Main({ param }) {
  const [count, setCount] = useState(param);
  //console.log(param[0]);
  return (
    <div id="slider">
      <Stringify id={count.labelParam + "-label"}>
        {count.labelParam + " Length"}
      </Stringify>
      <Clickers
        id={count.labelParam + "-increment"}
        onClick={() => setCount(state => ({ ...state, time: count.time + 1 }))}
      >
        +
      </Clickers>
      <Clickers
        id={count.labelParam + "-decrement"}
        onClick={() => setCount(state => ({ ...state, time: count.time - 1 }))}
      >
        -
      </Clickers>
      <Counter id={count.labelParam + "-length"}>{count.time}</Counter>
    </div>
  );
}

export default Main;

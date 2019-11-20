import React, { useState, useEffect } from "react";
import "./Main.css";

export const Stringify = props => <div className="letterStyle" {...props} />;
export const Counter = props => <div className="counter" {...props} />;
const Clickers = props => <div className="clickers" {...props} />;

function Main({ param }) {
  const [count, setCount] = useState(param);
  return (
    <div id="slider">
      <Stringify id={count.labelParam + "-label"}>
        {count.labelParam + " Length"}
      </Stringify>
      <Clickers
        id={count.labelParam + "-increment"}
        onClick={() =>
          setCount(state => ({
            ...state,
            time: count.time === 60 ? count.time : count.time + 1
          }))
        }
      >
        +
      </Clickers>
      <Clickers
        id={count.labelParam + "-decrement"}
        onClick={() =>
          setCount(state => ({
            ...state,
            time: count.time === 1 ? count.time : count.time - 1
          }))
        }
      >
        -
      </Clickers>
      <Counter id={count.labelParam + "-length"}>{count.time}</Counter>
    </div>
  );
}

export default Main;

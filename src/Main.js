import React, { useState } from "react";
import "./Main.css";

const Stringify = props => <div className="letterStyle" {...props} />;
const Counter = props => <div className="counter" {...props} />;
const Clickers = props => {
  return (
    <div className="clickers" {...props}>
    {props.children}
      <div className="clickersLine"></div>
    </div>
  );
};

function Main({time}) {
  const [count, setCount] = useState(time);
  return (
    <div id="slider">
      <Stringify id="break-label">Break Length</Stringify>
      <Clickers id="break-increment" onClick={() => setCount(count + 1)}>
        +
      </Clickers>
      <Clickers id="break-decrement" onClick={() => setCount(count - 1)}>
        -
      </Clickers>
            <Counter>{count}</Counter>
    </div>
  );
}

export default Main;

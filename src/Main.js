import React, { useState } from 'react';
import './Main.css';

const Stringify = props => <div className="letterStyle" {...props} />;
const Counter = props => <div className="counter" {...props} />;

function Main() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Stringify id="dddd">BREAK</Stringify>
      <Counter>
        <div>{count}</div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </Counter>
    </div>
  );
}

export default Main;

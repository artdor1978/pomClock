import React, { useState } from 'react';
import './Main.css';

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

function Main({ param }) {
  const [count, setCount] = useState(param);
  //console.log(param[0]);
  return (
    <div id="slider">
      <Stringify id={count[1] + '-label'}>{count[1] + ' Length'}</Stringify>
      <Clickers id={count[1] + '-increment'} onClick={() => setCount(count[0] + 1)}>
        +
      </Clickers>
      <Clickers id={count[1] + '-decrement'} onClick={() => setCount(count[0] - 1)}>
        -
      </Clickers>
      <Counter>{count[0]}</Counter>
    </div>
  );
}

export default Main;

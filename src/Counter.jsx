import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash
} from "react-feather";

function Counter() {
  const [count, setCount] = React.useState(0);

  function num() {
    const nextNum = count + 1;
    setCount(nextNum);
  }
  function less() {
    const prevNum = count > 0 ? count - 1 : 0;
    setCount(prevNum);
  }
  function max() {
    const maxNum = count + 10;
    setCount(maxNum);
  }
  function reset() {
    const resetNum = 0;
    setCount(resetNum);
  }
  function min() {
    const minNum = count > 10 ? count - 10 : count;
    setCount(minNum);
  }

  function random() {
    const min = 1;
    const max = 10;
    let randomNum = count + Math.floor(Math.random() * (max - min + 1)) + min;
    setCount(randomNum);
  }

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={num}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button onClick={max}>
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={reset}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button onClick={random}>
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={min}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={less}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;

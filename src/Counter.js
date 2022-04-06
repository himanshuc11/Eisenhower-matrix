import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

// useSelector state.reducer.variable
function Counter() {
  const counterData = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      Counter {counterData.count}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;

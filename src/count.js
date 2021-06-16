import * as React from "react";
import { useCount } from "./count-context";

function CountDisplay() {
  const {
    state: { count }
  } = useCount();

  return <div>The counter value is {count}</div>;
}

function Counter() {
  const { dispatch } = useCount();

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <>
      <button onClick={handleIncrement}>Increment Counter</button>
      <br />
      <br />
      <button onClick={handleDecrement}>Decrement Counter</button>
    </>
  );
}

export { CountDisplay, Counter };

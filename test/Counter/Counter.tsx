import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState<number>(0);
  return (
    <>
      <h1 data-testid="3ffgnjk">{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default Counter;

'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count <= 0) {
      alert('Cannot go below 0');
    } else {
      setCount(count - 1);
    }
  };

  const increment = () => {
    if (count >= 10) {
      alert('Cannot be more than 10');
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div>
      {count}
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

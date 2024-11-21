import './Button.module.css'
import { useState } from 'react';

export default function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Кликнули {count} раз</button>;
}

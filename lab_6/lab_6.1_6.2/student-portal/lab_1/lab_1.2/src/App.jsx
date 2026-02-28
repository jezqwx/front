import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default function App(){
  return(
    <div style={{ padding: 20 }}>
      <h2>Counter App</h2>
      <Counter/>
    </div>
  );
}
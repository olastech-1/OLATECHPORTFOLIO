// src/components/playground/StateCounterDemo.jsx
import { useState } from 'react';

function StateCounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center py-4">
      <p className="font-display font-bold text-5xl">{count}</p>
      <div className="flex justify-center gap-3 mt-6">
        <button onClick={() => setCount((c) => c - 1)} className="btn btn-outline !px-5">
          −
        </button>
        <button onClick={() => setCount(0)} className="btn btn-outline !px-5 text-xs">
          Reset
        </button>
        <button onClick={() => setCount((c) => c + 1)} className="btn btn-gold !px-5">
          +
        </button>
      </div>
      <p className="text-slate2 text-xs mt-5 font-mono2">
        useState(0) → count is currently {count}
      </p>
    </div>
  );
}

export default StateCounterDemo;

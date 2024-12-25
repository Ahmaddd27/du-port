import React, { useState } from 'react';

const InteractiveComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h2 className="text-xl">Interactive Counter</h2>
      <p className="text-lg">Count: {count}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default InteractiveComponent;
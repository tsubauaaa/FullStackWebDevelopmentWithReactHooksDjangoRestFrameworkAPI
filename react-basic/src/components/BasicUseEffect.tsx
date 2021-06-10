import React, { useState, useEffect } from "react";

const BasicUseEffect: React.FC = () => {
  const [count, setCount] = useState(0);
  const [item, setitem] = useState("");

  useEffect(() => {
    console.log("useEffect invoked");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(evt) => setitem(evt.target.value)}
      />
    </div>
  );
};

export default BasicUseEffect;

import React from "react";
import { useRef } from "react";

function ExampleTwo() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <div style={{ margin: "1rem 0 1rem 0" }}>
      <input ref={ref} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default ExampleTwo;

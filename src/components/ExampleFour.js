import React, { useRef } from "react";

function ExampleFour() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.value = "Hi there!";
  };
  const handleClear = () => {
    ref.current.value = "";
  };
  return (
    <div style={{ margin: "1rem 0 1rem 0" }}>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>Change the input value</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default ExampleFour;

import React, { useEffect, useRef, useState } from "react";

function ExampleThree() {
  const [inputValue, setinputValue] = useState("");
  const ref = useRef(null);
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  useEffect(() => {
    ref.current = inputValue;
  }, [inputValue]);

  return (
    <div style={{ margin: "1rem 0 1rem 0" }}>
      <input value={inputValue} onChange={handleChange} />
      <div>Current value is {inputValue} </div>
      <div>Previous value is {ref.current}</div>
    </div>
  );
}

export default ExampleThree;

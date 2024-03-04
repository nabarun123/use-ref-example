import React, { useRef } from "react";

function Example() {
  const count = useRef(0);
  const handleClick = () => {
    count.current = count.current + 1;
    alert(`You have clicked ${count.current} times!`);
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default Example;

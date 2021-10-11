import React, { useState } from "react";

const LastComp = () => {
  const [count, setCount] = useState(0);
  const countBtnFunc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>this is last comp{count}</h3>
      <button onClick={countBtnFunc}>lastcomp</button>
    </div>
  );
};

export default LastComp;

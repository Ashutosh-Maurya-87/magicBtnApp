import React, { useState } from "react";
import Child5 from "./Child5";
const Child4 = () => {
  const [btn1, setBtn1] = useState(20);
  const btn1Func = () => {
    setBtn1(btn1 - 1);
  };
  return (
    <div>
      <h3>this is 4 child{btn1}</h3>
      <button onClick={btn1Func}>button4</button>
      <Child5 />
    </div>
  );
};

export default Child4;

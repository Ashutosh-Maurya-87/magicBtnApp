import React, { useState } from "react";
import Child2 from "./Child2";

const Child1 = () => {
  const [btn1, setBtn1] = useState(0);
  const btn1Func = () => {
    setBtn1(btn1 + 1);
  };
  return (
    <div>
      <h3>this is 1 child{btn1}</h3>
      <button onClick={btn1Func}>button1</button>
      <Child2 />
    </div>
  );
};

export default Child1;

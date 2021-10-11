import React, { useState } from "react";
import Child3 from "./Child3";
const Child2 = () => {
  const [btn1, setBtn1] = useState(0);
  const btn1Func = () => {
    setBtn1(btn1 + 2);
  };

  const btn2Func = () => {
    if (btn1 > 0) {
      setBtn1(0);
    }
  };

  return (
    <div>
      <h3>This button increase value by {btn1}</h3>
      <button onClick={btn1Func}>button2</button>
      <Child3 func={btn2Func} btn12={btn1} />
    </div>
  );
};

export default Child2;

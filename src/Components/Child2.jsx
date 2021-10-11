import React, { useState } from "react";
import Child3 from "./Child3";
const Child2 = () => {
  const [btn1, setBtn1] = useState(0);
  const [btn2, setBtn2] = useState(0);
  const btn2Func = () => {
    if (btn1 > 0) {
      setBtn2(btn1 - 2);
    } else {
      setBtn1(btn1 + 2);
    }
  };

  const btn1Func = () => {
    setBtn1(btn1 + 2);
  };
  return (
    <div>
      <h3>this is 2 child{btn1}</h3>
      <button onClick={btn1Func}>button2</button>
      <Child3 func={btn2Func} btn12={btn2} />
    </div>
  );
};

export default Child2;

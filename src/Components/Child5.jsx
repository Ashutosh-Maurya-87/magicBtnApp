import React, { useState } from "react";
import LastComp from "./LastComp";
const Child6 = () => {
  const [btn1, setBtn1] = useState(20);
  const btn1Func = () => {
    setBtn1(btn1 - 2);
  };
  return (
    <div>
      <h3>this is 5 child{btn1}</h3>
      <button onClick={btn1Func}>button6</button>
      <LastComp />
    </div>
  );
};

export default Child6;

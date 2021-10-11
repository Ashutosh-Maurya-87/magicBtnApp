import React from "react";
import Child2 from "./Child2";
const Child1 = (props) => {
  // const clickFunc = () => {
  //   setBtn1(btn1 + 1);
  // };
  return (
    <div>
      <h3>This button increase value by {props.show}</h3>
      <button>button1</button>
      <Child2 />
    </div>
  );
};

export default Child1;

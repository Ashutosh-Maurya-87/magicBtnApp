import React from "react";
import Child4 from "./Child4";
const Child3 = (props) => {
  return (
    <div>
      <h3>This button show value 0 </h3>
      <button onClick={props.func}>button3</button>
      <Child4 />
    </div>
  );
};

export default Child3;

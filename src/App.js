import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./Components/action/Action";
import Child1 from "./Components/Child1";
function App() {
  const myState = useSelector((state) => state.increse);
  const decrease = useSelector((state) => state.decrese);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h2>Increment Counter{myState} </h2>
        <button onClick={() => dispatch(Increment())}>Inc</button>
      </div>
      <div>
        <h2>Decrement Counter{decrease}</h2>
        <button onClick={() => dispatch(Decrement())}>Dec</button>
      </div>
      <Child1 show={myState} />
    </div>
  );
}

export default App;

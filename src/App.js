// Anything we want to use in React we have to import that 1st
import { useState } from "react";
import "./styles.css";

export default function App() {
  const traceble = useState(0);
  const traceble2nd = useState(0);
  //usestate return a array with 2 elements
  // 1st elem i.e 0th ind element is current state or simple non traceble variable
  // 2nd elem i.e. 1st index element is a updatefunction or when it is  a function so we can update or trace the state variable
  const inc = traceble[0];
  const updateInc = traceble[1];

  const dec = traceble2nd[0];
  const updateDec = traceble2nd[1];

  const incrementFunc = () => {
    updateInc((currentValue) => {
      const newValue = currentValue + 1;
      return newValue;
    });
  };
  const decrementFunc = () => {
    updateDec((currentValue) => {
      const newValue = currentValue - 1;
      return newValue;
    });
  };
  return (
    <div className="App">
      <button onClick={incrementFunc}>Increment</button>
      <h1>{inc}</h1>
      <button onClick={decrementFunc}>Decrement</button>
      <h1>{dec}</h1>
      <h2>Start editing React Hooks (useState) to see some magic happen!</h2>
    </div>
  );
}

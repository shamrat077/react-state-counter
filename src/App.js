import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increaseHandler = () => {
    setCounter(counter + 1);
  };

  const decreaseHandler = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  return (
    <div className="App">
      <button onClick={increaseHandler} className="increase__btn">
        Increased Value By 1
      </button>
      <button onClick={decreaseHandler} className="decrease__btn">
        Decreased Value By 1
      </button>
      <span className="value">value: {counter}</span>
    </div>
  );
}

export default App;

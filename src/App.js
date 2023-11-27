import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decrementHandler() {
    setCount(count - 1);
  }
  function incrementHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-[#344151] flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-10">
        <div className="text-[#0398d4] font-lg text-4xl ">
          Increment && Decrement
        </div>
        <div className="bg-white rounded-md flex justify-between items-center p-4 text-3xl font-bold shadow shadow-gray-500">
          <button
            onClick={decrementHandler}
            className="border-r-4 border-[#bfbfbf] text-5xl w-[25%] text-center"
          >
            -
          </button>
          <div className="font-bold text-5xl">{count}</div>
          <button
            onClick={incrementHandler}
            className="border-l-4 border-[#bfbfbf] text-5xl w-[25%] text-center"
          >
            +
          </button>
        </div>
        <button
          onClick={resetHandler}
          className="text-xl uppercase bg-[#0398d4] text-white py-4 px-2 rounded-md  shadow shadow-[#0398d4] bg-blend-normal tracking-[.20em] font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

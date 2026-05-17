import React from "react";
import { useRef } from "react";

const App = () => {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }

  return (
    <div className="bg-neutral-700 h-screen text-white flex flex-col items-center justify-center text-xl font-bold">
      <input
        ref={inputRef}
        className="border p-2 text-white"
        type="text"
        placeholder="enter name"
      />
      <button
        onClick={focusInput}
        className="border p-1 rounded mt-4 cursor-pointer active:scale-95 bg-green-700"
      >
        focus
      </button>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";

const useEffectBasics = () => {
  // by default runs after every re-render
  // cleanup function
  // second parameter

  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("My World");
  }, []);

  useEffect(() => {
    console.log("call useEffect");
    document.title = value
      ? `New Messages (${value})`
      : "There are no new messages";
  }, [value]);

  useEffect(() => {
    console.log("Hello World");
  }, []);

  console.log("Render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" type="button" onClick={() => setValue(value + 1)}>
        Increment
      </button>
    </>
  );
};

export default useEffectBasics;

import React from "react";
import { useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = React.useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1>Windows</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;

import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const value1 = "",
    value2 = "Hello World";
  return (
    <>
      <h2>{value1 || "this is default value"}</h2>;
      {value2 && <h2>This is returned as condition for && is met</h2>}
    </>
  );
};

export default ShortCircuit;

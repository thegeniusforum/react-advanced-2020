import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState);
  // // returns an array
  // //default values are [underfined, function]

  // //function operates on the value set/passed
  // console.log(useState("Hello"));
  // //Return ["Hello", function]

  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  //convention to use setFunctionality for function
  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    if (text === "Random Title") setText("Hello World");
    else setText("Random Title");
  };

  // if (1) {
  //   const [text, setText] = useState("Random Title");
  // } // throws error “React Hook "useState" is called conditionally”

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

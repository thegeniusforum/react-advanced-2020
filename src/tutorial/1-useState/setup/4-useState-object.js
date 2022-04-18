import React from "react";
import { useState } from "react";

const useStateObject = () => {
  const [person, setPerson] = useState({
    id: 5,
    name: "Peter",
    age: 34,
    message: "random message",
  });

  const changeMessage = (newMessage) => {
    setPerson({ ...person, message: newMessage });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={() => changeMessage("Hello there!")}>
        Change Message
      </button>
    </>
  );
};

export default useStateObject;

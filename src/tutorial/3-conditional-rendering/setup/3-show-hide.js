import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  return (
    <>
      <button className="btn" type="button" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show ? (
        <Item size={size} />
      ) : (
        <h2 style={{ color: "purple" }}>No component on display</h2>
      )}
    </>
  );
};

const Item = (props) => {
  const { size } = props;
  return (
    <div style={{ maring: "2rem" }}>
      <h1>Window</h1>
      <h2>Size:{size} PX</h2>
    </div>
  );
};

export default ShowHide;

import React from "react";
import { useState } from "react";

const useStateCounter = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          Increase
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          Decrease
        </button>
        <button type="button" className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setTimeout(
              () =>
                setValue((prevState) => {
                  return prevState + 1;
                }),
              2000
            );
          }}
        >
          Increase later
        </button>
      </section>
    </>
  );
};

export default useStateCounter;

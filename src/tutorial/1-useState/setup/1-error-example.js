import React from "react";

const ErrorExample = () => {
  let title = "useState Error Example";

  const changeTitleHandler = () => {
    title = "Hello World";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={changeTitleHandler}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

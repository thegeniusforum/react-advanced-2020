import React, { useState } from "react";
import { useEffect } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    return name && email
      ? (function () {
          setPeople((people) => [...people, { name, email }]);
          setName("");
          setEmail("");
        })()
      : "";
  };

  useEffect(() => {
    console.log(people);
  }, [people]);

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </article>
      {
        <ul className="users">
          {people.map(({ name, email }, index) => {
            return (
              <div key={index} className="item">
                <li>{name}</li>
                <li>{email}</li>
              </div>
            );
          })}
        </ul>
      }
    </>
  );
};

export default ControlledInputs;

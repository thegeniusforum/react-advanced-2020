import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    id: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
    console.log(person);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("person", person);
    return person.firstName && person.email && person.age
      ? (function () {
          const newPerson = { ...person, id: new Date().getTime().toString() };
          setPeople([...people, newPerson]);
          setPerson({
            firstName: "",
            email: "",
          });
        })()
      : console.log("something false");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, email };
  //     console.log(person);
  //     setPeople((people) => {
  //       return [...people, person];
  //     });
  //     setFirstName("");
  //     setEmail("");
  //   } else {
  //     console.log("empty values");
  //   }
  // };
  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="age"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <h5>{age}</h5>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;

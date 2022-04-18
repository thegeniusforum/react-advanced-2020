import React, { useState } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id != id);
    });
  };

  const [people, setPeople] = useState(data);
  // console.log(1, people);
  return (
    <section>
      <h3>Prop Drilling</h3>
      <List removePerson={removePerson} people={people} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  // console.log(2, people);
  return (
    <>
      {people.map((person) => (
        <SinglePerson key={person.id} {...person} removePerson={removePerson} />
      ))}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  // console.log(3, id, name, removePerson);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove Item</button>
    </div>
  );
};

export default PropDrilling;

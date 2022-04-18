import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  let { id } = useParams();
  id = parseInt(id);
  const [name, setName] = useState("default");

  useEffect(() => {
    data.find((person) => person.id === id && setName(person.name));
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default Person;

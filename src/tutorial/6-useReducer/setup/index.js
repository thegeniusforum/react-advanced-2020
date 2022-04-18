import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    name
      ? (function () {
          const newPeople = { id: new Date().getTime().toString(), name };
          dispatch({ type: "ADD_ITEM", payload: newPeople });
          setName("");
        })()
      : dispatch({ type: "NO_VALUE" });
  };

  const handleCloseModal = (e) => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleRemovePeople = (name) => {
    dispatch({ type: "REMOVE_PEOPLE", payload: { name } });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal
          handleCloseModal={handleCloseModal}
          modalContent={state.modalContent}
        />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      {state.people.map(({ id, name }) => {
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => handleRemovePeople(name)}>
              Remove Person
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;

export const reducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newPeople = [...prevState.people, action.payload];

      return {
        ...prevState,
        people: newPeople,
        isModalOpen: true,
        modalContent: `${action.payload.name} is added`,
      };
    }

    case "NO_VALUE": {
      return {
        ...prevState,
        isModalOpen: true,
        modalContent: "Please enter value",
      };
    }

    case "CLOSE_MODAL":
      return { ...prevState, isModalOpen: false };

    case "REMOVE_PEOPLE": {
      const newPeople = prevState.people.filter(
        (people) => people.name != action.payload.name
      );
      return {
        ...prevState,
        people: newPeople,
        isModalOpen: true,
        modalContent: `${action.payload.name} is removed`,
      };
    }
  }
  throw new Error(`Could not find the action (${action.type})`);
};

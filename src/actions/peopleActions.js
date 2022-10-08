export const addPeople = (people) => {
  return {
    type: "setPeople",
    payload: people,
  };
};
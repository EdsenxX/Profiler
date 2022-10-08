const INITIAL_STATE = {
  people: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "setPeople":
      return {
        ...state,
        people: [ ...state.people, ...action.payload ],
      };
    default:
      return state;
  }
};

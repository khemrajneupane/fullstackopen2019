const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "CREATE_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export const createFilter = filter => {
  return {
    type: "CREATE_FILTER",
    filter
  };
};

export default filterReducer;

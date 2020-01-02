export const createFilter = filter => {
  return {
    type: "CREATE_FILTER",
    filter
  };
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "CREATE_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default filterReducer;


export const addVote = id => ({
  type: "ADD_VOTE_BY_ONE",
  payload: {
    id
  }
});

export const newAnecdotes = contents => ({
  type: "NEW_ANECDOTE",
  contents
});

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT_ANECDOTES",
    payload: anecdotes
  }
}
const reducer = (state = [], action) => {

  switch (action.type) {
    case "ADD_VOTE_BY_ONE":
      const anecdoteById = state.find(a => a.id === action.payload.id);
      const voted = { ...anecdoteById, votes: anecdoteById.votes + 1 };
      return state.map(anec => (anec.id !== action.payload.id ? anec : voted));
    case "NEW_ANECDOTE":
      return [...state, action.contents];
    case "INIT_ANECDOTES":
      return action.payload
    default:
      return state;
  }
};

export default reducer;

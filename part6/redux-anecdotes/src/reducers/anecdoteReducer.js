import anecdoteService from "../../src/services/anecdotes";

export const addVote = (id) => {
  return async dispatch => {
    const anecdoteToChange = await anecdoteService.getOneById(id)
    await anecdoteService.addVoteByOne(id, anecdoteToChange);

    dispatch({
      type: "ADD_VOTE_BY_ONE",
      payload: { id }
    });
  };
};
export const newAnecdotes = contents => {
  return async dispatch => {
    const newAnecdotes = await anecdoteService.createNew(contents);
    dispatch({
      type: "NEW_ANECDOTE",
      contents: newAnecdotes
    });
  };
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      payload: anecdotes
    });
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_VOTE_BY_ONE":
      const anecdoteById = state.find(a => a.id === action.payload.id);
      const voted = { ...anecdoteById, votes: anecdoteById.votes + 1 };
      const result = state.map(anec =>
        anec.id !== action.payload.id ? anec : voted
      );

      return result;
    case "NEW_ANECDOTE":
      return [...state, action.contents];
    case "INIT_ANECDOTES":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

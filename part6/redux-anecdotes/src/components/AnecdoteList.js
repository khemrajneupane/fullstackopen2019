import React from "react";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotificationMsg } from "../reducers/notificationReducer";

const AnecdoteList = props => {
  const voteWithNotice = (id, content) => {
    props.store.dispatch(setNotificationMsg(`you voted '${content}'`));
    props.store.dispatch(addVote(id));
    setTimeout(() => {
      props.store.dispatch(setNotificationMsg(null));
    }, 5000);
  };
  /**Filtering logic */
  const { anecdote, filter } = props.store.getState();

  let filtered;
  filter
    ? (filtered = anecdote.filter(f => f.content.includes(filter)))
    : (filtered = anecdote);

  return (
    <div>
      <h2>Anecdotes</h2>
      {filtered
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={e => {
                  e.preventDefault();
                  voteWithNotice(anecdote.id, anecdote.content);
                }}
              >
                vote
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default AnecdoteList;

import React from "react";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotificationMsg } from "../reducers/notificationReducer";
import { connect } from "react-redux";

const AnecdoteList = props => {
  const voteWithNotice = (id, content) => {
    props.addVote(id);
    props.setNotificationMsg(`you voted '${content}'`, 5);
    setTimeout(() => {
      props.setNotificationMsg(null);
    }, 5000);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {props.filterAnecdote
        .sort((a, b) => b.votes - a.votes)
        .map(anec => (
          <div key={anec.id}>
            <div>{anec.content}</div>
            <div>
              has {anec.votes}
              <button
                onClick={e => {
                  e.preventDefault();
                  voteWithNotice(anec.id, anec.content);
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

/**Filtering logic */
const filterAnecdote = state => {
  if (!state.filter) {
    return state.anecdote;
  } else {
    return state.anecdote.filter(a => a.content.includes(state.filter));
  }
};

const mapDispatchToProps = {
  addVote,
  setNotificationMsg
};
const mapStateToProps = state => {
  return {
    filterAnecdote: filterAnecdote(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);

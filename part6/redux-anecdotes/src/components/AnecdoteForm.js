import React from "react";
import { newAnecdotes } from "../reducers/anecdoteReducer";
import { setNotificationMsg } from "../reducers/notificationReducer";
import { connect } from "react-redux";
import anecdoteService from "../../src/services/anecdotes";

const AnecdoteForm = props => {
  const addFormNotify = async e => {
    e.preventDefault();
    const content = e.target.contents.value;
    const newAnecdote = await anecdoteService.createNew(content)
    props.newAnecdotes(newAnecdote)
    props.setNotificationMsg(`you created `);
    
    setTimeout(() => {
      props.setNotificationMsg(null);
    }, 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addFormNotify}>
        <div>
          <input name="contents" />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  newAnecdotes,
  setNotificationMsg
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);

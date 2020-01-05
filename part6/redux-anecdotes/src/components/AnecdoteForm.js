import React from "react";
import { newAnecdotes } from "../reducers/anecdoteReducer";
import { setNotificationMsg } from "../reducers/notificationReducer";
import { connect } from "react-redux";

const AnecdoteForm = props => {
  const addFormNotify = e => {
    e.preventDefault();
    const content = e.target.contents.value;
    e.target.contents.value = "";
    props.newAnecdotes(content);
    props.setNotificationMsg(`you created ${content}`, 4);
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

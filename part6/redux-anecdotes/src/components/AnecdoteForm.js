import React from "react";
import { newAnecdotes } from "../reducers/anecdoteReducer";
import { setNotificationMsg } from "../reducers/notificationReducer";

const AnecdoteForm = props => {
  const addFormNotify = e => {
    e.preventDefault();

    props.store.dispatch(
      setNotificationMsg(`you created '${e.target.contents.value}'`)
    );
    props.store.dispatch(newAnecdotes(e.target.contents.value));
    setTimeout(() => {
      props.store.dispatch(setNotificationMsg(null));
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
export default AnecdoteForm;
